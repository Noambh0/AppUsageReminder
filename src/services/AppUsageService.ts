import { NativeModules } from "react-native";

const AppUsageModule = NativeModules.AppUsageModule;

export type AppUsage = {
    appName: string;
    packageName: string;
    usageTime: number;
    totalUsageTime: number;
};

export async function getMostUsedApps(days: number): Promise<AppUsage[]> {
    const mostUsedApps = await AppUsageModule.getMostUsedApps(days);
    return(mostUsedApps);    
}