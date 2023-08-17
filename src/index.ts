import { join } from "path"
import edge from "edge-js"


export class GetSpecialFolder {

    public static GetMyDocuments() {
        let assemblyFile = join(__dirname, 'lib', 'GetSpecialFolder.dll')
        const getMyDocuments = edge.func<null, string>({
            assemblyFile: assemblyFile,
            typeName: 'GetSpecialFolder.Program',
            methodName: 'GetMyDocuments'
        })
        return getMyDocuments(null, true)
    }
    /**
     * 获取其他特殊文件夹路径
     * @param SpecialFolder set: https://learn.microsoft.com/en-us/dotnet/api/system.environment.specialfolder?view=net-7.0
     * @returns 
     */
    public static GetOther(SpecialFolder: number) {
        let assemblyFile = join(__dirname, 'lib', 'GetSpecialFolder.dll')
        const getOther = edge.func<number, string>({
            assemblyFile: assemblyFile,
            typeName: 'GetSpecialFolder.Program',
            methodName: 'GetOther'
        })
        return getOther(SpecialFolder, true)
    }
}
