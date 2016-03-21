namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's loops.
     */
    export class LoopProperties {
        /**
         * The keyword used for "break".
         */
        public break: string;

        /**
         * The keyword used for "continue".
         */
        public continue: string;

        /**
         * Whether foreach loops are a method, rather than a standard loop.
         */
        public forEachAsMethod: boolean;

        /**
         * How objects may give their listing of keys, such as ".Keys".
         */
        public forEachKeysGet: string;

        /**
         * How to start a foreach loop's initial line.
         */
        public forEachLeft: string;

        /**
         * The middle portion of a foreach loop's initial line.
         */
        public forEachMiddle: string;

        /**
         * The class name of foreach pairs, such as "KeyValuePair" or "MapEntry".
         */
        public forEachPairsPairClass: string;

        /**
         * Whether foreach loops iterate over pairs of items, rather than over keys.
         */
        public forEachPairsAsPair: boolean;

        /**
         * How to retrieve a key from a foreach pair, such as ".Key" or ".getKey()".
         */
        public forEachPairsRetrieveKey: string;

        /**
         * How to retrieve a key from a foreach pair, such as ".Value" or ".getValue()".
         */
        public forEachPairsRetrieveValue: string;

        /**
         * How to end a foreach loop's initial line.
         */
        public forEachRight: string;

        /**
         * Whether Pythonic ranged loops are used, rather than traditional C-like ones.
         */
        public rangedForLoops: boolean;

        /**
         * How to start a Pythonic ranged loop's initial line.
         */
        public rangedForLoopsLeft: string;

        /**
         * The separator between numbers inside Pythonic ranged loops.
         */
        public rangedForLoopsMiddle: string;

        /**
         * How to end a Pythonic ranged loop's initial line.
         */
        public rangedForLoopsRight: string;
    }
}