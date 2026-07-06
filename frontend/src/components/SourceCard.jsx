function SourceCard({ sources }) {
  // no sources 상태
  if (!sources || sources.length === 0) {
    return (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-sm text-slate-500">
        참고한 공고 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-700">📄 참고한 공고 출처</h2>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
          {sources.length}개 공고 참고
        </span>
      </div>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-lg border border-slate-200 p-4"
          >
            {/* 회사 — 제목, type 배지 */}
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-slate-700">
                {source.company} — {source.title}
              </p>
              {source.type && (
                <span className="shrink-0 text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-lg">
                  {source.type}
                </span>
              )}
            </div>

            {/* 필수 스킬 */}
            <p className="text-xs text-slate-500 mt-1">
              필수 스킬: {source.required_skills || "정보 없음"}
            </p>

            {/* matched_reason (있을 때만) */}
            {source.matched_reason && (
              <p className="text-xs text-emerald-700 mt-2">
                ✓ 매칭 이유: {source.matched_reason}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCard;