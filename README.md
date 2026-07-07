# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치

---

# 📌 프로젝트 개요

취업을 준비하는 학생들은 자신의 전공과 보유 스킬이 실제 채용 시장의 요구와 얼마나 맞는지 파악하기 어렵고, 수많은 채용 공고를 직접 비교해야 하는 불편함이 있습니다.

CareerFit AI는 **RAG(Retrieval-Augmented Generation)** 구조를 활용하여 사용자의 전공, 보유 스킬, 관심 직무를 **실제 채용 공고 CSV 데이터**와 비교합니다. ChromaDB에서 관련 공고를 검색한 뒤 Gemini가 해당 공고를 근거로 역량 분석을 수행하고, 참고한 공고(`sources`)를 함께 제공하여 답변의 신뢰성을 높였습니다.

---

# 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| Backend | Python 3.11, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| Data | Pandas, SQLite, ChromaDB |
| Frontend | React, Vite |
| Deployment | Docker, Render |

---

# 🏗 아키텍처

```text
React (Vite)
      │
      ▼
FastAPI (/analyze)
      │
      ├── SQLite (공고 데이터 조회)
      │
      ├── ChromaDB (유사도 검색)
      │
      ▼
Gemini API
      │
      ▼
AI 분석 결과 + Sources 반환
```

---

# 🚀 실행 방법

## 1. Docker 실행 (Backend)

먼저 환경변수 파일을 생성합니다.

```bash
cp .env.example .env
```

필요한 값을 입력한 뒤 Docker 이미지를 빌드하고 실행합니다.

```bash
docker build -t careerfit-ai .

docker run -p 8000:8000 --env-file .env careerfit-ai
```

실행 후

- API : http://localhost:8000
- Swagger : http://localhost:8000/docs
- Health Check : http://localhost:8000/health

---

## 2. 로컬 실행

### Backend

```bash
cd backend

source venv/bin/activate
# Windows
# venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install
npm run dev
```

> **Backend를 먼저 실행한 뒤 Frontend를 실행해야 정상적으로 API가 연결됩니다.**

실행 주소

- Frontend : http://localhost:5173
- Backend : http://localhost:8000

---

# 🔐 환경변수

### backend/.env.example

```env
GEMINI_API_KEY=your_gemini_api_key_here
FRONTEND_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### frontend/.env.example

```env
VITE_API_BASE_URL=http://localhost:8000
```

`.env.example` 파일을 복사하여 `.env` 파일을 생성한 뒤 자신의 환경에 맞게 값을 입력합니다.

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

> `.env` 파일에는 API Key 등 민감한 정보가 포함되므로 GitHub에 업로드하지 않습니다.

---

# 📊 데이터 파이프라인

```text
채용 공고 CSV
      │
      ▼
Pandas 전처리
      │
      ├── SQLite (정확 조회)
      │
      └── ChromaDB (벡터 검색)
                  │
                  ▼
             RAG 검색
                  │
                  ▼
             Gemini 분석
                  │
                  ▼
      AI 답변 + Sources
```

사용한 데이터는 **회사명, 직무명, 필수 스킬, 업무 내용 등이 포함된 채용 공고 CSV**이며, Pandas로 전처리한 뒤 SQLite와 ChromaDB에 각각 저장하여 정확 조회와 의미 기반 검색에 활용했습니다.

---

# ✨ 주요 기능

- RAG 기반 AI 역량 분석
- 실제 채용 공고를 근거로 맞춤형 조언 제공
- 참고한 공고(Source) 함께 반환
- FastAPI REST API 제공
- React 기반 사용자 인터페이스
- Docker 기반 실행 및 배포

---

# 📁 프로젝트 구조

```text
careerfit_ai_new/

├── backend/
│   ├── routers/
│   ├── services/
│   ├── data/
│   ├── main.py
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   └── public/
│
├── docs/
│   ├── CHECKLIST.md
│   ├── PROJECT_PLAN.md
│   ├── PROMPTS.md
│   └── EVAL_QUESTIONS.md
│
└── README.md
```

---

# ✅ 검증

프로젝트가 정상적으로 동작하는지 아래 항목을 기준으로 확인했습니다.

- ✔ `/health` 엔드포인트를 통해 FastAPI 서버 정상 동작 확인
- ✔ `/analyze` 호출 시 AI 분석 결과와 `sources`가 함께 반환되는지 확인
- ✔ React UI에서 분석 결과와 출처 카드가 정상 출력되는지 확인
- ✔ Docker 컨테이너에서 Backend가 정상 실행되는지 확인
- ✔ Render Web Service에 Backend를 배포하여 API가 정상 동작하는지 확인

---

# 🌐 배포

현재는 **Backend만 Render Web Service(Docker)** 로 배포되어 있으며, Frontend는 로컬 환경에서 실행됩니다.

### Backend API

https://careerfit-ai-od1g.onrender.com/

### Swagger

https://careerfit-ai-od1g.onrender.com/docs

### Health Check

https://careerfit-ai-od1g.onrender.com/health

> Render 무료 플랜 특성상 일정 시간 요청이 없으면 서버가 절전(Sleep) 상태가 될 수 있으며, 첫 요청 시 약 30~60초 정도 서버가 시작되는 시간이 필요할 수 있습니다.

---

# 🔮 향후 개선

- [ ] 최신 채용 공고 자동 수집
- [ ] PDF 이력서 자동 분석
- [ ] 공모전 일정 추천
- [ ] 사용자 맞춤 학습 로드맵 제공
- [ ] Frontend Render 배포
- [ ] RAG 검색 품질 평가(Ragas 등)

---

# 📝 개발 과정

가장 어려웠던 부분은 **ChromaDB 검색 결과를 Gemini와 연결하여 근거(Source)를 함께 반환하는 RAG 구현**이었습니다. 검색된 문서를 프롬프트에 포함하고 응답을 `answer`와 `sources` 구조로 분리하여, 실제 채용 공고를 근거로 한 분석 결과를 제공하도록 개선했습니다.

---

# 👨‍💻 Developer

- **Name** : 조준형
- **Role** : Backend · AI Service Development
- **Project** : CareerFit AI
- **GitHub** : @chojunheng1234-del
- **Email** : chojunheng1234@gmail.com