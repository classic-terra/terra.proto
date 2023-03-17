//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: confio/proofs.proto

package ics23;

@kotlin.jvm.JvmName("-initializenonExistenceProof")
public inline fun nonExistenceProof(block: ics23.NonExistenceProofKt.Dsl.() -> kotlin.Unit): ics23.Proofs.NonExistenceProof =
  ics23.NonExistenceProofKt.Dsl._create(ics23.Proofs.NonExistenceProof.newBuilder()).apply { block() }._build()
public object NonExistenceProofKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ics23.Proofs.NonExistenceProof.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ics23.Proofs.NonExistenceProof.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ics23.Proofs.NonExistenceProof = _builder.build()

    /**
     * <pre>
     * TODO: remove this as unnecessary??? we prove a range
     * </pre>
     *
     * <code>bytes key = 1;</code>
     */
    public var key: com.google.protobuf.ByteString
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <pre>
     * TODO: remove this as unnecessary??? we prove a range
     * </pre>
     *
     * <code>bytes key = 1;</code>
     */
    public fun clearKey() {
      _builder.clearKey()
    }

    /**
     * <code>.ics23.ExistenceProof left = 2;</code>
     */
    public var left: ics23.Proofs.ExistenceProof
      @JvmName("getLeft")
      get() = _builder.getLeft()
      @JvmName("setLeft")
      set(value) {
        _builder.setLeft(value)
      }
    /**
     * <code>.ics23.ExistenceProof left = 2;</code>
     */
    public fun clearLeft() {
      _builder.clearLeft()
    }
    /**
     * <code>.ics23.ExistenceProof left = 2;</code>
     * @return Whether the left field is set.
     */
    public fun hasLeft(): kotlin.Boolean {
      return _builder.hasLeft()
    }

    /**
     * <code>.ics23.ExistenceProof right = 3;</code>
     */
    public var right: ics23.Proofs.ExistenceProof
      @JvmName("getRight")
      get() = _builder.getRight()
      @JvmName("setRight")
      set(value) {
        _builder.setRight(value)
      }
    /**
     * <code>.ics23.ExistenceProof right = 3;</code>
     */
    public fun clearRight() {
      _builder.clearRight()
    }
    /**
     * <code>.ics23.ExistenceProof right = 3;</code>
     * @return Whether the right field is set.
     */
    public fun hasRight(): kotlin.Boolean {
      return _builder.hasRight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ics23.Proofs.NonExistenceProof.copy(block: ics23.NonExistenceProofKt.Dsl.() -> kotlin.Unit): ics23.Proofs.NonExistenceProof =
  ics23.NonExistenceProofKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ics23.Proofs.NonExistenceProofOrBuilder.leftOrNull: ics23.Proofs.ExistenceProof?
  get() = if (hasLeft()) getLeft() else null

public val ics23.Proofs.NonExistenceProofOrBuilder.rightOrNull: ics23.Proofs.ExistenceProof?
  get() = if (hasRight()) getRight() else null
