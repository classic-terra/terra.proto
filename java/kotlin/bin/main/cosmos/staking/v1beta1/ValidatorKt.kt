//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/staking.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmName("-initializevalidator")
public inline fun validator(block: cosmos.staking.v1beta1.ValidatorKt.Dsl.() -> kotlin.Unit): cosmos.staking.v1beta1.Staking.Validator =
  cosmos.staking.v1beta1.ValidatorKt.Dsl._create(cosmos.staking.v1beta1.Staking.Validator.newBuilder()).apply { block() }._build()
public object ValidatorKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.staking.v1beta1.Staking.Validator.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Staking.Validator.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Staking.Validator = _builder.build()

    /**
     * <pre>
     * operator_address defines the address of the validator's operator; bech encoded in JSON.
     * </pre>
     *
     * <code>string operator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"operator_address&#92;""];</code>
     */
    public var operatorAddress: kotlin.String
      @JvmName("getOperatorAddress")
      get() = _builder.getOperatorAddress()
      @JvmName("setOperatorAddress")
      set(value) {
        _builder.setOperatorAddress(value)
      }
    /**
     * <pre>
     * operator_address defines the address of the validator's operator; bech encoded in JSON.
     * </pre>
     *
     * <code>string operator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"operator_address&#92;""];</code>
     */
    public fun clearOperatorAddress() {
      _builder.clearOperatorAddress()
    }

    /**
     * <pre>
     * consensus_pubkey is the consensus public key of the validator, as a Protobuf Any.
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_pubkey = 2 [(.gogoproto.moretags) = "yaml:&#92;"consensus_pubkey&#92;"", (.cosmos_proto.accepts_interface) = "cosmos.crypto.PubKey"];</code>
     */
    public var consensusPubkey: com.google.protobuf.Any
      @JvmName("getConsensusPubkey")
      get() = _builder.getConsensusPubkey()
      @JvmName("setConsensusPubkey")
      set(value) {
        _builder.setConsensusPubkey(value)
      }
    /**
     * <pre>
     * consensus_pubkey is the consensus public key of the validator, as a Protobuf Any.
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_pubkey = 2 [(.gogoproto.moretags) = "yaml:&#92;"consensus_pubkey&#92;"", (.cosmos_proto.accepts_interface) = "cosmos.crypto.PubKey"];</code>
     */
    public fun clearConsensusPubkey() {
      _builder.clearConsensusPubkey()
    }
    /**
     * <pre>
     * consensus_pubkey is the consensus public key of the validator, as a Protobuf Any.
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_pubkey = 2 [(.gogoproto.moretags) = "yaml:&#92;"consensus_pubkey&#92;"", (.cosmos_proto.accepts_interface) = "cosmos.crypto.PubKey"];</code>
     * @return Whether the consensusPubkey field is set.
     */
    public fun hasConsensusPubkey(): kotlin.Boolean {
      return _builder.hasConsensusPubkey()
    }

    /**
     * <pre>
     * jailed defined whether the validator has been jailed from bonded status or not.
     * </pre>
     *
     * <code>bool jailed = 3;</code>
     */
    public var jailed: kotlin.Boolean
      @JvmName("getJailed")
      get() = _builder.getJailed()
      @JvmName("setJailed")
      set(value) {
        _builder.setJailed(value)
      }
    /**
     * <pre>
     * jailed defined whether the validator has been jailed from bonded status or not.
     * </pre>
     *
     * <code>bool jailed = 3;</code>
     */
    public fun clearJailed() {
      _builder.clearJailed()
    }

    /**
     * <pre>
     * status is the validator status (bonded/unbonding/unbonded).
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.BondStatus status = 4;</code>
     */
    public var status: cosmos.staking.v1beta1.Staking.BondStatus
      @JvmName("getStatus")
      get() = _builder.getStatus()
      @JvmName("setStatus")
      set(value) {
        _builder.setStatus(value)
      }
    /**
     * <pre>
     * status is the validator status (bonded/unbonding/unbonded).
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.BondStatus status = 4;</code>
     */
    public fun clearStatus() {
      _builder.clearStatus()
    }

    /**
     * <pre>
     * tokens define the delegated tokens (incl. self-delegation).
     * </pre>
     *
     * <code>string tokens = 5 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    public var tokens: kotlin.String
      @JvmName("getTokens")
      get() = _builder.getTokens()
      @JvmName("setTokens")
      set(value) {
        _builder.setTokens(value)
      }
    /**
     * <pre>
     * tokens define the delegated tokens (incl. self-delegation).
     * </pre>
     *
     * <code>string tokens = 5 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    public fun clearTokens() {
      _builder.clearTokens()
    }

    /**
     * <pre>
     * delegator_shares defines total shares issued to a validator's delegators.
     * </pre>
     *
     * <code>string delegator_shares = 6 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec", (.gogoproto.moretags) = "yaml:&#92;"delegator_shares&#92;""];</code>
     */
    public var delegatorShares: kotlin.String
      @JvmName("getDelegatorShares")
      get() = _builder.getDelegatorShares()
      @JvmName("setDelegatorShares")
      set(value) {
        _builder.setDelegatorShares(value)
      }
    /**
     * <pre>
     * delegator_shares defines total shares issued to a validator's delegators.
     * </pre>
     *
     * <code>string delegator_shares = 6 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec", (.gogoproto.moretags) = "yaml:&#92;"delegator_shares&#92;""];</code>
     */
    public fun clearDelegatorShares() {
      _builder.clearDelegatorShares()
    }

    /**
     * <pre>
     * description defines the description terms for the validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Description description = 7 [(.gogoproto.nullable) = false];</code>
     */
    public var description: cosmos.staking.v1beta1.Staking.Description
      @JvmName("getDescription")
      get() = _builder.getDescription()
      @JvmName("setDescription")
      set(value) {
        _builder.setDescription(value)
      }
    /**
     * <pre>
     * description defines the description terms for the validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Description description = 7 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearDescription() {
      _builder.clearDescription()
    }
    /**
     * <pre>
     * description defines the description terms for the validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Description description = 7 [(.gogoproto.nullable) = false];</code>
     * @return Whether the description field is set.
     */
    public fun hasDescription(): kotlin.Boolean {
      return _builder.hasDescription()
    }

    /**
     * <pre>
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * </pre>
     *
     * <code>int64 unbonding_height = 8 [(.gogoproto.moretags) = "yaml:&#92;"unbonding_height&#92;""];</code>
     */
    public var unbondingHeight: kotlin.Long
      @JvmName("getUnbondingHeight")
      get() = _builder.getUnbondingHeight()
      @JvmName("setUnbondingHeight")
      set(value) {
        _builder.setUnbondingHeight(value)
      }
    /**
     * <pre>
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     * </pre>
     *
     * <code>int64 unbonding_height = 8 [(.gogoproto.moretags) = "yaml:&#92;"unbonding_height&#92;""];</code>
     */
    public fun clearUnbondingHeight() {
      _builder.clearUnbondingHeight()
    }

    /**
     * <pre>
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp unbonding_time = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    public var unbondingTime: com.google.protobuf.Timestamp
      @JvmName("getUnbondingTime")
      get() = _builder.getUnbondingTime()
      @JvmName("setUnbondingTime")
      set(value) {
        _builder.setUnbondingTime(value)
      }
    /**
     * <pre>
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp unbonding_time = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    public fun clearUnbondingTime() {
      _builder.clearUnbondingTime()
    }
    /**
     * <pre>
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp unbonding_time = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_time&#92;"", (.gogoproto.stdtime) = true];</code>
     * @return Whether the unbondingTime field is set.
     */
    public fun hasUnbondingTime(): kotlin.Boolean {
      return _builder.hasUnbondingTime()
    }

    /**
     * <pre>
     * commission defines the commission parameters.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Commission commission = 10 [(.gogoproto.nullable) = false];</code>
     */
    public var commission: cosmos.staking.v1beta1.Staking.Commission
      @JvmName("getCommission")
      get() = _builder.getCommission()
      @JvmName("setCommission")
      set(value) {
        _builder.setCommission(value)
      }
    /**
     * <pre>
     * commission defines the commission parameters.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Commission commission = 10 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearCommission() {
      _builder.clearCommission()
    }
    /**
     * <pre>
     * commission defines the commission parameters.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Commission commission = 10 [(.gogoproto.nullable) = false];</code>
     * @return Whether the commission field is set.
     */
    public fun hasCommission(): kotlin.Boolean {
      return _builder.hasCommission()
    }

    /**
     * <pre>
     * min_self_delegation is the validator's self declared minimum self delegation.
     * </pre>
     *
     * <code>string min_self_delegation = 11 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"min_self_delegation&#92;""];</code>
     */
    public var minSelfDelegation: kotlin.String
      @JvmName("getMinSelfDelegation")
      get() = _builder.getMinSelfDelegation()
      @JvmName("setMinSelfDelegation")
      set(value) {
        _builder.setMinSelfDelegation(value)
      }
    /**
     * <pre>
     * min_self_delegation is the validator's self declared minimum self delegation.
     * </pre>
     *
     * <code>string min_self_delegation = 11 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"min_self_delegation&#92;""];</code>
     */
    public fun clearMinSelfDelegation() {
      _builder.clearMinSelfDelegation()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.staking.v1beta1.Staking.Validator.copy(block: cosmos.staking.v1beta1.ValidatorKt.Dsl.() -> kotlin.Unit): cosmos.staking.v1beta1.Staking.Validator =
  cosmos.staking.v1beta1.ValidatorKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val cosmos.staking.v1beta1.Staking.ValidatorOrBuilder.consensusPubkeyOrNull: com.google.protobuf.Any?
  get() = if (hasConsensusPubkey()) getConsensusPubkey() else null

public val cosmos.staking.v1beta1.Staking.ValidatorOrBuilder.descriptionOrNull: cosmos.staking.v1beta1.Staking.Description?
  get() = if (hasDescription()) getDescription() else null

public val cosmos.staking.v1beta1.Staking.ValidatorOrBuilder.unbondingTimeOrNull: com.google.protobuf.Timestamp?
  get() = if (hasUnbondingTime()) getUnbondingTime() else null

public val cosmos.staking.v1beta1.Staking.ValidatorOrBuilder.commissionOrNull: cosmos.staking.v1beta1.Staking.Commission?
  get() = if (hasCommission()) getCommission() else null
