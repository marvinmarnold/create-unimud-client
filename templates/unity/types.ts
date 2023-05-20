import {SchemaType} from '@latticexyz/schema-type'

export const schemaTypesToCSTypeStrings: Record<SchemaType, string> = {
  [SchemaType.UINT8]: 'byte',
  [SchemaType.UINT16]: 'ushort',
  [SchemaType.UINT24]: 'uint',
  [SchemaType.UINT32]: 'ulong',
  [SchemaType.UINT40]: 'ulong',
  [SchemaType.UINT48]: 'ulong',
  [SchemaType.UINT56]: 'ulong',
  [SchemaType.UINT64]: 'ulong',
  [SchemaType.UINT72]: 'System.Numerics.BigInteger',
  [SchemaType.UINT80]: 'System.Numerics.BigInteger',
  [SchemaType.UINT88]: 'System.Numerics.BigInteger',
  [SchemaType.UINT96]: 'System.Numerics.BigInteger',
  [SchemaType.UINT104]: 'System.Numerics.BigInteger',
  [SchemaType.UINT112]: 'System.Numerics.BigInteger',
  [SchemaType.UINT120]: 'System.Numerics.BigInteger',
  [SchemaType.UINT128]: 'System.Numerics.BigInteger',
  [SchemaType.UINT136]: 'System.Numerics.BigInteger',
  [SchemaType.UINT144]: 'System.Numerics.BigInteger',
  [SchemaType.UINT152]: 'System.Numerics.BigInteger',
  [SchemaType.UINT160]: 'System.Numerics.BigInteger',
  [SchemaType.UINT168]: 'System.Numerics.BigInteger',
  [SchemaType.UINT176]: 'System.Numerics.BigInteger',
  [SchemaType.UINT184]: 'System.Numerics.BigInteger',
  [SchemaType.UINT192]: 'System.Numerics.BigInteger',
  [SchemaType.UINT200]: 'System.Numerics.BigInteger',
  [SchemaType.UINT208]: 'System.Numerics.BigInteger',
  [SchemaType.UINT216]: 'System.Numerics.BigInteger',
  [SchemaType.UINT224]: 'System.Numerics.BigInteger',
  [SchemaType.UINT232]: 'System.Numerics.BigInteger',
  [SchemaType.UINT240]: 'System.Numerics.BigInteger',
  [SchemaType.UINT248]: 'System.Numerics.BigInteger',
  [SchemaType.UINT256]: 'System.Numerics.BigInteger',
  [SchemaType.INT8]: 'byte',
  [SchemaType.INT16]: 'short',
  [SchemaType.INT24]: 'int',
  [SchemaType.INT32]: 'long',
  [SchemaType.INT40]: 'long',
  [SchemaType.INT48]: 'long',
  [SchemaType.INT56]: 'long',
  [SchemaType.INT64]: 'long',
  [SchemaType.INT72]: 'System.Numerics.BigInteger',
  [SchemaType.INT80]: 'System.Numerics.BigInteger',
  [SchemaType.INT88]: 'System.Numerics.BigInteger',
  [SchemaType.INT96]: 'System.Numerics.BigInteger',
  [SchemaType.INT104]: 'System.Numerics.BigInteger',
  [SchemaType.INT112]: 'System.Numerics.BigInteger',
  [SchemaType.INT120]: 'System.Numerics.BigInteger',
  [SchemaType.INT128]: 'System.Numerics.BigInteger',
  [SchemaType.INT136]: 'System.Numerics.BigInteger',
  [SchemaType.INT144]: 'System.Numerics.BigInteger',
  [SchemaType.INT152]: 'System.Numerics.BigInteger',
  [SchemaType.INT160]: 'System.Numerics.BigInteger',
  [SchemaType.INT168]: 'System.Numerics.BigInteger',
  [SchemaType.INT176]: 'System.Numerics.BigInteger',
  [SchemaType.INT184]: 'System.Numerics.BigInteger',
  [SchemaType.INT192]: 'System.Numerics.BigInteger',
  [SchemaType.INT200]: 'System.Numerics.BigInteger',
  [SchemaType.INT208]: 'System.Numerics.BigInteger',
  [SchemaType.INT216]: 'System.Numerics.BigInteger',
  [SchemaType.INT224]: 'System.Numerics.BigInteger',
  [SchemaType.INT232]: 'System.Numerics.BigInteger',
  [SchemaType.INT240]: 'System.Numerics.BigInteger',
  [SchemaType.INT248]: 'System.Numerics.BigInteger',
  [SchemaType.INT256]: 'System.Numerics.BigInteger',
  [SchemaType.BYTES1]: 'string',
  [SchemaType.BYTES2]: 'string',
  [SchemaType.BYTES3]: 'string',
  [SchemaType.BYTES4]: 'string',
  [SchemaType.BYTES5]: 'string',
  [SchemaType.BYTES6]: 'string',
  [SchemaType.BYTES7]: 'string',
  [SchemaType.BYTES8]: 'string',
  [SchemaType.BYTES9]: 'string',
  [SchemaType.BYTES10]: 'string',
  [SchemaType.BYTES11]: 'string',
  [SchemaType.BYTES12]: 'string',
  [SchemaType.BYTES13]: 'string',
  [SchemaType.BYTES14]: 'string',
  [SchemaType.BYTES15]: 'string',
  [SchemaType.BYTES16]: 'string',
  [SchemaType.BYTES17]: 'string',
  [SchemaType.BYTES18]: 'string',
  [SchemaType.BYTES19]: 'string',
  [SchemaType.BYTES20]: 'string',
  [SchemaType.BYTES21]: 'string',
  [SchemaType.BYTES22]: 'string',
  [SchemaType.BYTES23]: 'string',
  [SchemaType.BYTES24]: 'string',
  [SchemaType.BYTES25]: 'string',
  [SchemaType.BYTES26]: 'string',
  [SchemaType.BYTES27]: 'string',
  [SchemaType.BYTES28]: 'string',
  [SchemaType.BYTES29]: 'string',
  [SchemaType.BYTES30]: 'string',
  [SchemaType.BYTES31]: 'string',
  [SchemaType.BYTES32]: 'string',
  [SchemaType.BOOL]: 'bool',
  [SchemaType.ADDRESS]: 'string',
  [SchemaType.UINT8_ARRAY]: 'byte[]',
  [SchemaType.UINT16_ARRAY]: 'ushort[]',
  [SchemaType.UINT24_ARRAY]: 'uint[]',
  [SchemaType.UINT32_ARRAY]: 'uint[]',
  [SchemaType.UINT40_ARRAY]: 'ulong[]',
  [SchemaType.UINT48_ARRAY]: 'ulong[]',
  [SchemaType.UINT56_ARRAY]: 'ulong[]',
  [SchemaType.UINT64_ARRAY]: 'ulong[]',
  [SchemaType.UINT72_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT80_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT88_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT96_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT104_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT112_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT120_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT128_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT136_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT144_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT152_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT160_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT168_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT176_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT184_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT192_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT200_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT208_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT216_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT224_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT232_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT240_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT248_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.UINT256_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT8_ARRAY]: 'sbyte[]',
  [SchemaType.INT16_ARRAY]: 'short[]',
  [SchemaType.INT24_ARRAY]: 'int[]',
  [SchemaType.INT32_ARRAY]: 'int[]',
  [SchemaType.INT40_ARRAY]: 'long[]',
  [SchemaType.INT48_ARRAY]: 'long[]',
  [SchemaType.INT56_ARRAY]: 'long[]',
  [SchemaType.INT64_ARRAY]: 'long[]',
  [SchemaType.INT72_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT80_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT88_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT96_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT104_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT112_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT120_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT128_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT136_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT144_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT152_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT160_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT168_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT176_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT184_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT192_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT200_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT208_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT216_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT224_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT232_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT240_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT248_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.INT256_ARRAY]: 'System.Numerics.BigInteger[]',
  [SchemaType.BYTES1_ARRAY]: 'string[]',
  [SchemaType.BYTES2_ARRAY]: 'string[]',
  [SchemaType.BYTES3_ARRAY]: 'string[]',
  [SchemaType.BYTES4_ARRAY]: 'string[]',
  [SchemaType.BYTES5_ARRAY]: 'string[]',
  [SchemaType.BYTES6_ARRAY]: 'string[]',
  [SchemaType.BYTES7_ARRAY]: 'string[]',
  [SchemaType.BYTES8_ARRAY]: 'string[]',
  [SchemaType.BYTES9_ARRAY]: 'string[]',
  [SchemaType.BYTES10_ARRAY]: 'string[]',
  [SchemaType.BYTES11_ARRAY]: 'string[]',
  [SchemaType.BYTES12_ARRAY]: 'string[]',
  [SchemaType.BYTES13_ARRAY]: 'string[]',
  [SchemaType.BYTES14_ARRAY]: 'string[]',
  [SchemaType.BYTES15_ARRAY]: 'string[]',
  [SchemaType.BYTES16_ARRAY]: 'string[]',
  [SchemaType.BYTES17_ARRAY]: 'string[]',
  [SchemaType.BYTES18_ARRAY]: 'string[]',
  [SchemaType.BYTES19_ARRAY]: 'string[]',
  [SchemaType.BYTES20_ARRAY]: 'string[]',
  [SchemaType.BYTES21_ARRAY]: 'string[]',
  [SchemaType.BYTES22_ARRAY]: 'string[]',
  [SchemaType.BYTES23_ARRAY]: 'string[]',
  [SchemaType.BYTES24_ARRAY]: 'string[]',
  [SchemaType.BYTES25_ARRAY]: 'string[]',
  [SchemaType.BYTES26_ARRAY]: 'string[]',
  [SchemaType.BYTES27_ARRAY]: 'string[]',
  [SchemaType.BYTES28_ARRAY]: 'string[]',
  [SchemaType.BYTES29_ARRAY]: 'string[]',
  [SchemaType.BYTES30_ARRAY]: 'string[]',
  [SchemaType.BYTES31_ARRAY]: 'string[]',
  [SchemaType.BYTES32_ARRAY]: 'string[]',
  [SchemaType.BOOL_ARRAY]: 'object', // no boolean array
  [SchemaType.ADDRESS_ARRAY]: 'string[]',
  [SchemaType.BYTES]: 'string',
  [SchemaType.STRING]: 'string',
}
