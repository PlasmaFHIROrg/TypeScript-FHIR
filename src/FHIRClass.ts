import { CodeFormatter } from "./CodeFormatter";

/**
 * Represents a FHIR class
 */
export class FHIRClass {
    public name: string;
    public description: string;
    
    public imports: { [key: string]: string };
    public constants: FHIRConstant[];
    public properties: FHIRProperty[];
    public enums: FHIREnum[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;

        this.imports = {};
        this.constants = [];
        this.properties = [];
        this.enums = [];
    }

    /**
     * Adds the given import to the list of imports 
     * @param imp Name of import
     */
    public addImport(imp: string) {
        if (imp === this.name) { return; }  // Don't import your own class

        this.imports[imp] = imp;
    }

    public toString(): string {
        let s = "";

        // Handle imports...
        Object.keys(this.imports).forEach((importName) => {
            const importPath = "./" + importName;
            s += CodeFormatter.formatImportStatement(importName, importPath) + ";\n";
        });
        s += "\n";

        // Class header...
        s += CodeFormatter.formatComment(this.description);
        s += `export default class ${this.name} {\n`

        // Handle constants...
        this.constants.forEach((fhirConst) => {
            s += fhirConst.toString(1) + "\n\n";
        });

        // Handle properties...
        this.properties.forEach((fhirProp) => {
            s += fhirProp.toString(1) + "\n\n";
        });

        // Class footer...
        s += "\n}\n\n";

        // Handle enums...
        this.enums.forEach((fhirEnum) => {
            s += fhirEnum.toString(0) + "\n\n";
        });

        return s;
    }

}

/**
 * Represents a FHIR constant
 */
export class FHIRConstant {
    public name: string;
    public value: string;
    public description: string;

    constructor(name: string, value: string, description: string) {
        description = description.replace(/\n*\r*/g,"");        // Strip newlines

        this.name = name;
        this.value = value;
        this.description = description;
    }

    public toString(indentLevel: number = 0): string {
        let s = "";
        s += CodeFormatter.formatComment(this.description, indentLevel);
        s += CodeFormatter.indent(indentLevel);
        s += `static readonly ${this.name} = "${this.value}";`
        return s;
    }
}

/**
 * Represents a FHIR property
 */
export class FHIRProperty {
    public name: string;
    public dataType: string;
    public description: string; 

    public isArray: boolean;
    public isRequired: boolean;

    constructor(name: string, dataType: string, description: string, isArray: boolean, isRequired: boolean) {
        description = description.replace(/\n*\r*/g,"");        // Strip newlines

        this.name = name;
        this.dataType = dataType;
        this.description = description;
        this.isArray = isArray;
        this.isRequired = isRequired;
    }

    public toString(indentLevel: number = 0): string {
        let s = "";
        s += CodeFormatter.formatComment(this.description, indentLevel);
        s += CodeFormatter.indent(indentLevel);
        s += this.name;
        s += (this.isRequired) ? "" : "?";
        s += ": " + this.dataType;
        s += (this.isArray) ? " | " + this.dataType + "[]" : "";
        s += ";";
        return s;
    }
}

/**
 * Represents a FHIR enum
 */
export class FHIREnum {
    public name: string;
    public values: string[];
    public description: string;

    constructor(name: string, values: string[], description: string) {
        description = description.replace(/\n*\r*/g,"");        // Strip newlines

        this.name = name;
        this.values = values;
        this.description = description;
    }

    public toString(indentLevel: number = 0) {
        let s = "";
        s += CodeFormatter.formatComment(this.description, indentLevel);
        s += CodeFormatter.formatExportedEnum(this.name, this.values, indentLevel);
        return s;
    }
}