//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/abci/types.proto

package tendermint.abci;

@kotlin.jvm.JvmName("-initializevoteInfo")
public inline fun voteInfo(block: tendermint.abci.VoteInfoKt.Dsl.() -> kotlin.Unit): tendermint.abci.Types.VoteInfo =
  tendermint.abci.VoteInfoKt.Dsl._create(tendermint.abci.Types.VoteInfo.newBuilder()).apply { block() }._build()
public object VoteInfoKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: tendermint.abci.Types.VoteInfo.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.abci.Types.VoteInfo.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.abci.Types.VoteInfo = _builder.build()

    /**
     * <code>.tendermint.abci.Validator validator = 1 [(.gogoproto.nullable) = false];</code>
     */
    public var validator: tendermint.abci.Types.Validator
      @JvmName("getValidator")
      get() = _builder.getValidator()
      @JvmName("setValidator")
      set(value) {
        _builder.setValidator(value)
      }
    /**
     * <code>.tendermint.abci.Validator validator = 1 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearValidator() {
      _builder.clearValidator()
    }
    /**
     * <code>.tendermint.abci.Validator validator = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the validator field is set.
     */
    public fun hasValidator(): kotlin.Boolean {
      return _builder.hasValidator()
    }

    /**
     * <code>bool signed_last_block = 2;</code>
     */
    public var signedLastBlock: kotlin.Boolean
      @JvmName("getSignedLastBlock")
      get() = _builder.getSignedLastBlock()
      @JvmName("setSignedLastBlock")
      set(value) {
        _builder.setSignedLastBlock(value)
      }
    /**
     * <code>bool signed_last_block = 2;</code>
     */
    public fun clearSignedLastBlock() {
      _builder.clearSignedLastBlock()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun tendermint.abci.Types.VoteInfo.copy(block: tendermint.abci.VoteInfoKt.Dsl.() -> kotlin.Unit): tendermint.abci.Types.VoteInfo =
  tendermint.abci.VoteInfoKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val tendermint.abci.Types.VoteInfoOrBuilder.validatorOrNull: tendermint.abci.Types.Validator?
  get() = if (hasValidator()) getValidator() else null
