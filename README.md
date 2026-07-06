# careerfit_ai_new
취업/공모전 데이터 기반 AI 포트폴리오 코치

# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

Q1. 취업 또는 공모전을 준비하면서 가장 불편했던 점은 무엇인가?
- 어떤 스킬을 준비해야 할지 모른다.
- 비슷한 공고들을 비교하기가 너무 귀찮다.
- 내 이력서가 이 직무에 맞는지 모르겠다.
- 중소기업 및 중견기업의 기업 정보가 너무 부족하다.

[본인이 정리한 문제정의 한 단락]

## 기술 스택



| 영역 | 기술 |

|---|---|

| 백엔드 | Python, FastAPI |

| AI API | Gemini 2.5 Flash-Lite |

| 데이터 | Pandas, SQLite, ChromaDB |

| 프론트엔드 | React, Vite |

| 실행 환경 | Docker |

## 진행 현황

```markdown
## 프론트엔드 실행 방법

```bash
cd frontend
npm install
npm run dev
```

프론트엔드: http://localhost:5173
백엔드 API: http://localhost:8000/docs

## 주요 기능

- [x] 역량 분석 입력 폼 (전공·스킬·관심 직무)
- [x] RAG 기반 AI 분석 결과 카드
- [x] 출처 공고 카드 (어떤 데이터를 근거로 했는지 표시)
## 진행 현황

- [x] 1일차: 기획 및 개발 환경 세팅
- [x] 2일차: FastAPI + Gemini API 연결
- [x] 3일차: 데이터 파이프라인
- [x] 4일차: RAG 기반 서비스 + React UI
- [ ] 5일차: Docker + 포트폴리오 완성
```

```bash
git add .
git commit -m "feat: RAG 기반 /analyze API 및 React UI 구현

- ChromaDB 문서 검색 (rag_service.py)
- Gemini RAG 연결 답변 생성 (llm_service.py)
- React + Vite 프로젝트 생성
- InputForm, ResultCard, SourceCard 컴포넌트
- fetch로 /analyze API 연결
- design-skill.md 작성"
git push
```