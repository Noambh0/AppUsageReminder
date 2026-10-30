package com.anonymous.AppUsageReminder

import android.app.AppOpsManager
import android.app.usage.UsageStatsManager
import android.content.Context
import android.os.Process
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Calendar

class AppUsageModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AppUsageModule"
    }
    private fun getStartTime(days: Int): Long {
        val calendar = Calendar.getInstance()

        calendar.set(Calendar.HOUR_OF_DAY, 0)
        calendar.set(Calendar.MINUTE, 0)
        calendar.set(Calendar.SECOND, 0)
        calendar.set(Calendar.MILLISECOND, 0)

        calendar.add(Calendar.DAY_OF_YEAR, -(days - 1))

        return calendar.timeInMillis
    }

    private fun getEndTime(): Long {
        return System.currentTimeMillis()
    }
    private fun hasUsagePermission(): Boolean {
        val appOps = reactApplicationContext.getSystemService(
            Context.APP_OPS_SERVICE
        ) as AppOpsManager

        val mode = appOps.checkOpNoThrow(
            AppOpsManager.OPSTR_GET_USAGE_STATS,
            Process.myUid(),
            reactApplicationContext.packageName
        )

        return mode == AppOpsManager.MODE_ALLOWED
    }

    @ReactMethod
    fun getMostUsedApps(days: Int, promise: Promise) {

        try {
            if (days != 1 && days != 7 && days != 30) {
                promise.reject(
                    "INVALID_PERIOD",
                    "Days must be 1, 7, or 30"
                )
                return
            }

            if (!hasUsagePermission()) {
                promise.reject(
                    "PERMISSION_DENIED",
                    "Usage Access permission is not enabled"
                )
                return
            }

            val usageStatsManager =
                reactApplicationContext.getSystemService(
                    Context.USAGE_STATS_SERVICE
                ) as UsageStatsManager

            val startTime = getStartTime(days)
            val endTime = getEndTime()

            val usageStats = usageStatsManager.queryUsageStats(
                UsageStatsManager.INTERVAL_DAILY,
                startTime,
                endTime
            )

            val appUsageMap = mutableMapOf<String, Long>()

            for (app in usageStats) {
                val packageName = app.packageName
                val usageTime = app.totalTimeInForeground

                if (usageTime <= 0L) {
                    continue
                }

                val previousTime = appUsageMap[packageName] ?: 0L

                appUsageMap[packageName] = previousTime + usageTime
            }

            val sortedApps = appUsageMap.entries
                .sortedByDescending { it.value }
                .take(10)

            val result = Arguments.createArray()

            val packageManager = reactApplicationContext.packageManager

            for (app in sortedApps) {
                val packageName = app.key
                val totalUsageTime = app.value

                val displayedUsageTime = if (days == 1) {
                    totalUsageTime
                } else {
                    totalUsageTime / days
                }

                val appName = try {
                    val applicationInfo =
                        packageManager.getApplicationInfo(packageName, 0)

                    packageManager.getApplicationLabel(
                        applicationInfo
                    ).toString()

                } catch (e: Exception) {
                    packageName
                }

                val appData = Arguments.createMap()

                appData.putString("appName", appName)
                appData.putString("packageName", packageName)

                appData.putDouble(
                    "usageTime",
                    displayedUsageTime.toDouble()
                )

                appData.putDouble(
                    "totalUsageTime",
                    totalUsageTime.toDouble()
                )

                result.pushMap(appData)
            }

            promise.resolve(result)

        } catch (e: Exception) {
            promise.reject(
                "USAGE_STATS_ERROR",
                e.message ?: "Failed to retrieve usage statistics",
                e
            )
        }
    }
}