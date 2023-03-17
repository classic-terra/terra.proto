//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/types/evidence.proto

package tendermint.types;

@kotlin.jvm.JvmSynthetic
inline fun evidence(block: tendermint.types.EvidenceKt.Dsl.() -> Unit): tendermint.types.EvidenceOuterClass.Evidence =
  tendermint.types.EvidenceKt.Dsl._create(tendermint.types.EvidenceOuterClass.Evidence.newBuilder()).apply { block() }._build()
object EvidenceKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.types.EvidenceOuterClass.Evidence.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.types.EvidenceOuterClass.Evidence.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.types.EvidenceOuterClass.Evidence = _builder.build()

    /**
     * <code>.tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1;</code>
     */
    var duplicateVoteEvidence: tendermint.types.EvidenceOuterClass.DuplicateVoteEvidence
      @JvmName("getDuplicateVoteEvidence")
      get() = _builder.getDuplicateVoteEvidence()
      @JvmName("setDuplicateVoteEvidence")
      set(value) {
        _builder.setDuplicateVoteEvidence(value)
      }
    /**
     * <code>.tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1;</code>
     */
    fun clearDuplicateVoteEvidence() {
      _builder.clearDuplicateVoteEvidence()
    }
    /**
     * <code>.tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1;</code>
     * @return Whether the duplicateVoteEvidence field is set.
     */
    fun hasDuplicateVoteEvidence(): kotlin.Boolean {
      return _builder.hasDuplicateVoteEvidence()
    }

    /**
     * <code>.tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2;</code>
     */
    var lightClientAttackEvidence: tendermint.types.EvidenceOuterClass.LightClientAttackEvidence
      @JvmName("getLightClientAttackEvidence")
      get() = _builder.getLightClientAttackEvidence()
      @JvmName("setLightClientAttackEvidence")
      set(value) {
        _builder.setLightClientAttackEvidence(value)
      }
    /**
     * <code>.tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2;</code>
     */
    fun clearLightClientAttackEvidence() {
      _builder.clearLightClientAttackEvidence()
    }
    /**
     * <code>.tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2;</code>
     * @return Whether the lightClientAttackEvidence field is set.
     */
    fun hasLightClientAttackEvidence(): kotlin.Boolean {
      return _builder.hasLightClientAttackEvidence()
    }
    val sumCase: tendermint.types.EvidenceOuterClass.Evidence.SumCase
      @JvmName("getSumCase")
      get() = _builder.getSumCase()

    fun clearSum() {
      _builder.clearSum()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.types.EvidenceOuterClass.Evidence.copy(block: tendermint.types.EvidenceKt.Dsl.() -> Unit): tendermint.types.EvidenceOuterClass.Evidence =
  tendermint.types.EvidenceKt.Dsl._create(this.toBuilder()).apply { block() }._build()
