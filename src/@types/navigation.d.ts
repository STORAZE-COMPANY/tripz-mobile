export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Login: undefined;
            StepEmail: undefined | { email: string, password: string };
            StepPassword: undefined;
            StepEmailPassword: { email: string };
            StepEmailToken: { email: string };
            StepNewPassword: { email: string };
            Content: undefined;
        }
    }
}