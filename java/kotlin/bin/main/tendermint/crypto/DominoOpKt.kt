//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/crypto/proof.proto

package tendermint.crypto;

@kotlin.jvm.JvmName("-initializedominoOp")
public inline fun dominoOp(block: tendermint.crypto.DominoOpKt.Dsl.() -> kotlin.Unit): tendermint.crypto.ProofOuterClass.DominoOp =
  tendermint.crypto.DominoOpKt.Dsl._create(tendermint.crypto.ProofOuterClass.DominoOp.newBuilder()).apply { block() }._build()
public object DominoOpKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: tendermint.crypto.ProofOuterClass.DominoOp.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.crypto.ProofOuterClass.DominoOp.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.crypto.ProofOuterClass.DominoOp = _builder.build()

    /**
     * <code>string key = 1;</code>
     */
    public var key: kotlin.String
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <code>string key = 1;</code>
     */
    public fun clearKey() {
      _builder.clearKey()
    }

    /**
     * <code>string input = 2;</code>
     */
    public var input: kotlin.String
      @JvmName("getInput")
      get() = _builder.getInput()
      @JvmName("setInput")
      set(value) {
        _builder.setInput(value)
      }
    /**
     * <code>string input = 2;</code>
     */
    public fun clearInput() {
      _builder.clearInput()
    }

    /**
     * <code>string output = 3;</code>
     */
    public var output: kotlin.String
      @JvmName("getOutput")
      get() = _builder.getOutput()
      @JvmName("setOutput")
      set(value) {
        _builder.setOutput(value)
      }
    /**
     * <code>string output = 3;</code>
     */
    public fun clearOutput() {
      _builder.clearOutput()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun tendermint.crypto.ProofOuterClass.DominoOp.copy(block: tendermint.crypto.DominoOpKt.Dsl.() -> kotlin.Unit): tendermint.crypto.ProofOuterClass.DominoOp =
  tendermint.crypto.DominoOpKt.Dsl._create(this.toBuilder()).apply { block() }._build()
