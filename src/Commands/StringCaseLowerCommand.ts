import { Import } from "../Languages/Imports/Import";
import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Creates a lower-case version of a string.
 */
export class StringCaseLowerCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringCaseLower)
        .withDescription("Creates a lower-case version of a string.")
        .withParameters([
            new SingleParameter("string", "A string to create a lower-case version of.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringCaseLowerCommand.metadata;
    }

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): Import[] {
        return this.language.properties.strings.requiredImports;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.strings.caseLower;
    }
}
