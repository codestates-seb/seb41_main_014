export const DUMMY_FiexedSavings = {
  data: [
    {
      savingsId: 33,
      interestId: 101,
      korCoNm: '한국산업은행',
      finPrdtNm: 'KDB Hi 자유적금',
      joinWay: '영업점',
      spclCnd:
        'KDB Hi 입출금통장에서 자동이체방법으로 납입하는 경우, 연 0.10% 가산',
      joinDeny: '1',
      joinMember:
        'KDB Hi 입출금통장에 가입한 개인(개인사업자 및 임의단체 제외)\n단, 국민인 거주자에 한함',
      etcNote: '해당없음',
      maxLimit: 3000000,
      intrRateType: 'M',
      intrRateTypeNm: '복리',
      rsrvTypeNm: '자유적립식',
      saveTrm: '12',
      mtrtInt:
        '*만기후 1년 이내:\n만기일 현재 일반정기적금 해당예금기간 기본이자율의 1/2\n* 만기후 1년 초과:\n만기일 현재 보통예금 이자율',
      intrRate: 4.17,
      intrRate2: 4.27,
      interestAmount: 23225, //세후 이자 금액
    },
    {
      savingsId: 45,
      interestId: 127,
      korCoNm: '농협은행주식회사',
      finPrdtNm: 'NH직장인월복리적금',
      joinWay: '영업점,인터넷,스마트폰',
      spclCnd:
        '1. 급여입금실적 보유 고객 중\n - 가입기간 중 3개월 이상 급여이체시 : 0.3%p\n - 주택청약종합저축 또는 펀드가입 : 0.2%p\n - NH채움카드 결제실적 1백만원 이상 : 0.2%p\n2. 인터넷(스마트)뱅킹 또는 올원뱅크로 가입 : 0.1%p',
      joinDeny: '3',
      joinMember: '만18세이상 개인',
      etcNote:
        '초입금 및 매회 입금 1만원 이상 원 단위,  1인당 분기별 3백만원 이내 적립 가능\n(단,계약기간 3/4 경과 후 적립할 수 있는 금액은 이전 적립누계액의 1/2이내)',
      maxLimit: 3000000,
      intrRateType: 'M',
      intrRateTypeNm: '복리',
      rsrvTypeNm: '자유적립식',
      saveTrm: '12',
      mtrtInt:
        '만기후 3개월 이내 : 만기시점 국고채 1년물 금리\n만기후 1년 이내 : 만기시점 채움적금 계약기간별 고시금리의 50%\n만기후 1년 초과 : 만기시점 보통예금 금리',
      intrRate: 3.71,
      intrRate2: 4.51,
      interestAmount: 20634,
    },
    {
      savingsId: 47,
      interestId: 133,
      korCoNm: '하나은행',
      finPrdtNm: '주거래하나 월복리적금',
      joinWay: '영업점,인터넷,스마트폰',
      spclCnd:
        '최고 연1.0%\n- 주거래하나우대(연 0.5%) : 적금만기 전전월말기준 본인명의 당행입출금통장을 통해 계약기간 1/2이상 이체된 주거래실적 1종  - 주거래플러스우대(연 0.9%) : 주거래 하나우대와 동일요건의 거래실적 2종이상 경우 \n- 온라인.재예치우대 연 최대 0.1%',
      joinDeny: '1',
      joinMember: '실명의 개인\n또는 개인사업자',
      etcNote:
        '1. 1인 1계좌만 가능\n(급여하나월복리적금,연금하나 월복리적금과 중복가입 불가)\n2. 가입금액 \n - 최저1만원~300만원이하\n3. 적립한도\n 분기당 1만원이상 300만원\n (자유적립식)',
      maxLimit: 3000000,
      intrRateType: 'M',
      intrRateTypeNm: '복리',
      rsrvTypeNm: '자유적립식',
      saveTrm: '12',
      mtrtInt:
        '1개월 이내 : 지급당시 해당기간별 일반정기적금 기본금리 1/2\n1개월 초과 : 지급당시 해당기간별 일반정기적금 기본금리 1/4',
      intrRate: 3.35,
      intrRate2: 4.35,
      interestAmount: 18611,
    },
    {
      savingsId: 42,
      interestId: 119,
      korCoNm: '농협은행주식회사',
      finPrdtNm: 'NH1934월복리적금',
      joinWay: '영업점,인터넷,스마트폰',
      spclCnd:
        '1. 급여실적 : 1.0%p (①/② 중복 적용 불가)\n ① 급여이체 실적 : 1.0%p\n ② 개인사업자 계좌 실적 :1.0%p\n2. 비대면 채널 이체 실적 : 0.3%p\n3. 마케팅 동의 : 0.2%p\n4. 농업계고 및 청년농부사관학교 졸업자 : 2.0%p',
      joinDeny: '3',
      joinMember: '만19세~만34세 개인 및 개인사업자',
      etcNote:
        '초입금 및 매회 1만원 이상, 월 50만원 이내 자유적립\n\n급여이체 실적과 개인사업자 계좌 실적 우대금리는 중복 적용 불가\n\n * 급여입금실적 인정기준\n  - 가입기간 12개월 이하 : 3개월 이상 급여이체\n  - 가입기간 24개월 이하 : 12개월 이상 급여이체',
      maxLimit: 500000,
      intrRateType: 'M',
      intrRateTypeNm: '복리',
      rsrvTypeNm: '자유적립식',
      saveTrm: '12',
      mtrtInt:
        '만기후 1년 이내 : 만기시점 계약기간별 기본금리의 1/2\n만기후 1년 초과 : 보통예금 금리',
      intrRate: 3.1,
      intrRate2: 6.6,
      interestAmount: 17209,
    },
    {
      savingsId: 55,
      interestId: 165,
      korCoNm: '수협은행',
      finPrdtNm: 'Sh월복리자유적금',
      joinWay: '영업점,인터넷,스마트폰',
      spclCnd:
        '*최대우대금리:0.7%\n-첫거래고객:0.3%\n-카드거래:최대0.3%\n-복수거래:0.1%\n-요구불거래:최대0.2%\n-인터넷뱅킹고객:0.1%\n-자동이체실적:0.1%\n※단위:연%p',
      joinDeny: '1',
      joinMember: '실명의 개인 및 개인사업자',
      etcNote: '- 1인 1계좌\n- 월 가입한도 : 100만원',
      maxLimit: 1000000,
      intrRateType: 'M',
      intrRateTypeNm: '복리',
      rsrvTypeNm: '자유적립식',
      saveTrm: '12',
      mtrtInt:
        '* 만기후 1년 이내\n - 만기당시 상호부금\n계약기간별 기본금리 1/2\n* 만기후 1년 초과\n - 만기당시 보통예금 기본금리',
      intrRate: 2.2,
      intrRate2: 2.9,
      interestAmount: 12180,
    },
  ],
  pageInfo: {
    page: 1,
    size: 10,
    totalElements: 5,
    totalPages: 1,
  },
};
