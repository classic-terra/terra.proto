//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/query.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryProposalResponse(block: cosmos.gov.v1beta1.QueryProposalResponseKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse =
  cosmos.gov.v1beta1.QueryProposalResponseKt.Dsl._create(cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse.newBuilder()).apply { block() }._build()
object QueryProposalResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse = _builder.build()

    /**
     * <code>.cosmos.gov.v1beta1.Proposal proposal = 1 [(.gogoproto.nullable) = false];</code>
     */
    var proposal: cosmos.gov.v1beta1.Gov.Proposal
      @JvmName("getProposal")
      get() = _builder.getProposal()
      @JvmName("setProposal")
      set(value) {
        _builder.setProposal(value)
      }
    /**
     * <code>.cosmos.gov.v1beta1.Proposal proposal = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearProposal() {
      _builder.clearProposal()
    }
    /**
     * <code>.cosmos.gov.v1beta1.Proposal proposal = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the proposal field is set.
     */
    fun hasProposal(): kotlin.Boolean {
      return _builder.hasProposal()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse.copy(block: cosmos.gov.v1beta1.QueryProposalResponseKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryProposalResponse =
  cosmos.gov.v1beta1.QueryProposalResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
