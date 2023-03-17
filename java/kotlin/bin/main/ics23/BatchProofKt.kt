//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: confio/proofs.proto

package ics23;

@kotlin.jvm.JvmName("-initializebatchProof")
public inline fun batchProof(block: ics23.BatchProofKt.Dsl.() -> kotlin.Unit): ics23.Proofs.BatchProof =
  ics23.BatchProofKt.Dsl._create(ics23.Proofs.BatchProof.newBuilder()).apply { block() }._build()
public object BatchProofKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ics23.Proofs.BatchProof.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ics23.Proofs.BatchProof.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ics23.Proofs.BatchProof = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class EntriesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     */
     public val entries: com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getEntriesList()
      )
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     * @param value The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addEntries")
    public fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.add(value: ics23.Proofs.BatchEntry) {
      _builder.addEntries(value)
    }
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     * @param value The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignEntries")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.plusAssign(value: ics23.Proofs.BatchEntry) {
      add(value)
    }
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     * @param values The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllEntries")
    public fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.addAll(values: kotlin.collections.Iterable<ics23.Proofs.BatchEntry>) {
      _builder.addAllEntries(values)
    }
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     * @param values The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllEntries")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.plusAssign(values: kotlin.collections.Iterable<ics23.Proofs.BatchEntry>) {
      addAll(values)
    }
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     * @param index The index to set the value at.
     * @param value The entries to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setEntries")
    public operator fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.set(index: kotlin.Int, value: ics23.Proofs.BatchEntry) {
      _builder.setEntries(index, value)
    }
    /**
     * <code>repeated .ics23.BatchEntry entries = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearEntries")
    public fun com.google.protobuf.kotlin.DslList<ics23.Proofs.BatchEntry, EntriesProxy>.clear() {
      _builder.clearEntries()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ics23.Proofs.BatchProof.copy(block: ics23.BatchProofKt.Dsl.() -> kotlin.Unit): ics23.Proofs.BatchProof =
  ics23.BatchProofKt.Dsl._create(this.toBuilder()).apply { block() }._build()
