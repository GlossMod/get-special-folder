import path from "path";

export class GetDllPath {
    static GetSpecialFolder() {
        return path.join(__dirname, "lib", "GetSpecialFolder.dll");
    }
}