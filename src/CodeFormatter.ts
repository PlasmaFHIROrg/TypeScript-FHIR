

/**
 * Class for formatting bits of code
 */
export class CodeFormatter
{

    /**
     * Returns spaces based on indentLevel
     * @param indentLevel How much you want to indent
     */
    public static indent(indentLevel: number = 0): string 
    {
        const SPACES_PER_INDENT = 4;
        let s = "";
        for (let i = 0; i < indentLevel * SPACES_PER_INDENT; i++) { s += " "; }
        return s;
    }

    /**
     * Returns a multi-line comment formatted similar to this comment
     * @param comment Comment
     * @param indentLevel Indent level
     */
    public static formatComment(comment: string, indentLevel: number = 0): string
    {
        const indent = CodeFormatter.indent(indentLevel);

        let s = "";
        s += `${indent}/**\n`;
        s += `${indent} * ${comment}\n`;
        s += `${indent} */\n`;
        return s;
    }

    /**
     * Formats an import statement like: import <importName> from '<importPath>'
     * @param importName Name of module to import
     * @param importPath Path containing module
     */
    public static formatImportStatement(importName: string, importPath: string): string
    {
        return `import ${importName} from '${importPath}'`;
    }

    /**
     * Formats an exported enum
     * @param enumName Name of enum
     * @param values Values in the enum
     * @param indentLevel Indent level
     */
    public static formatExportedEnum(enumName: string, values: string[], indentLevel: number = 0): string
    {
        const indent = CodeFormatter.indent(indentLevel);
        const indentPlusOne = CodeFormatter.indent(indentLevel + 1);

        // Get the list of values. Filter out invalid values. Join with a , and newline.
        const enumList = values
            .filter((enumValue) => { return CodeFormatter.isValidVarName(enumValue); })
            .map((enumValue) => { return `${indentPlusOne}"${enumValue}"`; })
            .join(",\n");

        let s = "";
        s += `${indent}export enum ${enumName}\n`;
        s += `${indent}{\n`;
        s += enumList;
        s += "\n";
        s += `${indent}}\n`;

        return s;
    }

    /**
     * Returns true if valid variable name
     * https://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names
     * @param name Variable name
     */
    public static isValidVarName(name: string): boolean
    {
        try { Function('var ' + name); } 
        catch( e ) { return false; }
        return true;
    }

}