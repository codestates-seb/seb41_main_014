const NONE = '-';

//Data key
export const FS_D_SAVINGS_ID = { field: 'savingsId' };
export const FS_D_INTEREST_ID = { field: 'interestIdt FS_B' };
export const FS_D_KOR_CO_NM = {
  field: 'korCoNm',
  headerName: '은행명',
};
export const FS_D_FIN_PRDT_NM = {
  field: 'finPrdtNm',
  headerName: '상품명',
};
export const FS_D_JOIN_WAY = {
  field: 'joinWay',
  headerName: '가입방법',
};
export const FS_D_SPCL_CND = {
  field: 'spclCnd',
  headerName: '우대조건',
};
export const FS_D_JOIN_DENY = {
  field: 'joinDeny',
  headerName: '가입대상',
  description:
    '제한없음 : 일반인 대상의 상품\n서민전용 : 기초생활수급자 등 서민우대상품으로 상세정보의 가입대상 요건 확인\n일부제한 : 특정인 대상 상품으로 상세정보의 가입대상 요건 확인',
};
export const FS_D_JOIN_MEMBER = {
  field: 'joinMember',
  headerName: '가입조건',
};
export const FS_D_ETC_NOTE = {
  field: 'etcNote',
  headerName: '상세조건',
};
export const FS_D_MAX_LIMIT = {
  field: 'maxLimit',
  headerName: '한도',
};
export const FS_D_INTER_RATE_TYPE_NM = {
  field: 'intrRateTypeNm',
  headerName: '이자계산방식',
  description:
    '단리 : 원금에 대해서만 약정한 이자율을 적용하여 이자를 지급하는 방식\n복리 : 가입기간 중 월 또는 연 단위로 발생한 이자를 원금에 합산하고 합산한 금액을 새로운 원금으로 하여 그 다음 월 또는 연의 이자를 계산하는 방식',
};
export const FS_D_RSRV_TYPE_NM = {
  field: 'rsrvTypeNm',
  headerName: '적립방식',
  description:
    '정액적립식 : 매월 일정한 금액을 납입하는 방식\n자유적립식 : 금액을 정하지 않고 자유롭게 납입하는 방식',
};
export const FS_D_SAVE_TRM = { field: 'saveTrm', headerName: '가입기간' };
export const FS_D_MTRT_INT = { field: 'mtrtInt', headerName: '만기 후 이자율' };
export const FS_D_INTR_RATE = { field: 'intrRate', headerName: '기본금리' };
export const FS_D_INTR_RATE2 = {
  field: 'intrRate2',
  headerName: '최고우대금리',
};
export const FS_D_DCLS_CHRG_MAN = {
  field: 'dcls_chrg_man',
  headerName: '문의',
};

const bankWoori = {
  korCoNm: '우리은행',
  finCoNo: '0010001',
  dcls_chrg_man: '개인고객부\n1588-5000\n부동산금융부\n1588-5000',
  homp_url: 'https://spot.wooribank.com/pot/Dream?withyou=po',
  cal_tel: '15885000',
};
const bankSc = {
  korCoNm: '한국스탠다드\n차타드은행',
  finCoNo: '0010002',
  dcls_chrg_man: 'SC제일은행 고객센터\n1588-1599',
  homp_url: 'http://www.standardchartered.co.kr',
  cal_tel: '15881599',
};
const bankCity = {
  korCoNm: '한국씨티은행',
  finCoNo: '0010006',
  homp_url: 'https://www.citibank.co.kr',
};
const bankDg = {
  korCoNm: '대구은행',
  finCoNo: '0010016',
  dcls_chrg_man: '개연여신기획부\n053-740-2230\n리테일마케팅부\n053-740-2162',
  homp_url: 'http://www.dgb.co.kr/dgb_ebz_main.jsp',
  cal_tel: '15885050',
};
const bankBusan = {
  korCoNm: '부산은행',
  finCoNo: '0010017',
  dcls_chrg_man:
    '(예금)마케팅추진부\n051-620-3339\n(대출)여신기획부\n051-620-3423',
  homp_url: 'http://www.busanbank.co.kr',
  cal_tel: '15886200',
};
const bankKj = {
  korCoNm: '광주은행',
  finCoNo: '0010019',
  dcls_chrg_man:
    '영업추진부/수신지원팀\n062-239-5206\n여신지원팀\n062-239-6509\n카드사업부 062-239-6107',
  homp_url: 'http://www.kjbank.com',
  cal_tel: '15883388',
};
const bankJeju = {
  korCoNm: '제주은행',
  finCoNo: '0010020',
  dcls_chrg_man: '영업추진본부\n064-720-0287',
  homp_url: 'https://e-jejubank.com',
  cal_tel: '15880079',
};
const bankJb = {
  korCoNm: '전북은행',
  finCoNo: '0010022',
  dcls_chrg_man:
    '마케팅추진부/마케팅추진팀\n063-250-7381\n여신기획부\n063-250-7370',
  homp_url: 'https://www.jbbank.co.kr/EFINANCE_MAIN.act',
  cal_tel: '15884477',
};
const bankKn = {
  korCoNm: '경남은행',
  finCoNo: '0010024',
  dcls_chrg_man:
    '리테일금융부(대출문의)\n055-290-8743\n마케팅추진부(예·적금상품)\n055-290-8315',
  homp_url: 'https://www.knbank.co.kr/ib20/mnu/FPMDPT020000000',
  cal_tel: '16008585',
};
const bankIbk = {
  korCoNm: '중소기업은행',
  finCoNo: '0010026',
  dcls_chrg_man: '고객 문의\n1566-2566',
  homp_url: 'http://www.ibk.co.kr',
  cal_tel: '15662566',
};
const bankKdb = {
  korCoNm: '한국산업은행',
  finCoNo: '0010030',
  dcls_chrg_man:
    '(예금)02-1588-1500\n(개인대출)네트워크지원실\n02-787-5638\n(기업대출)영업기획부\n02-787-6929',
  homp_url: 'http://www.kdb.co.kr',
  cal_tel: '0215881500',
};
const bankKb = {
  korCoNm: '국민은행',
  finCoNo: '0010927',
  dcls_chrg_man:
    '(예금)수신상품부\n02-1588-9999\n(대출)개인여신부\n02-1588-9999',
  homp_url: 'http://www.kbstar.com',
  cal_tel: '15889999',
};
const bankShinhan = {
  korCoNm: '신한은행',
  finCoNo: '0011625',
  dcls_chrg_man: '개인고객부\n1577-8000(수신)\n개인고객부\n1577-8000(여신)',
  homp_url: 'http://www.shinhan.com',
  cal_tel: '15778000',
};
const bankNonghyup = {
  korCoNm: '농협은행\n주식회사',
  dcls_chrg_man: '마케팅지원부\n02-2080-7786(여신)\n7731(수신)',
  homp_url: 'https://banking.nonghyup.com',
  cal_tel: '16613000',
};
const bankHana = {
  korCoNm: '하나은행',
  finCoNo: '0013909',
  dcls_chrg_man:
    '가계수신(예금)\n02-1599-1111(리테일사업부)\n가계여신(대출)\n02-2002-1249(리테일사업부)',
  homp_url: 'http://www.hanabank.com',
  cal_tel: '15991111',
};
const bankK = {
  korCoNm: '주식회사\n케이뱅크',
  finCoNo: '0014674',
  dcls_chrg_man: '수신팀\n02-3210-7312',
  homp_url: 'https://ib.kbanknow.com/ib20/mnu/FPMDPT010000',
  cal_tel: '15221000',
};
const bankSuhyup = {
  korCoNm: '수협은행',
  finCoNo: '0014807',
  dcls_chrg_man: '개인금융부(수신)\n1588-1515\n개인금융부(여신)\n1588-1515',
  homp_url: 'http://www.suhyup-bank.com',
  cal_tel: '15881515',
};
const bankKakao = {
  korCoNm: '주식회사\n카카오뱅크',
  finCoNo: '0015130',
  dcls_chrg_man: '수신팀\n1599-3333\n여신팀\n1599-3333',
  homp_url: 'https://www.kakaobank.com/',
  cal_tel: '15993333',
};
const bankToss = {
  korCoNm: '토스뱅크\n주식회사',
  finCoNo: '0017801',
  dcls_chrg_man: '수신스쿼드\n02-6713-1952\n여신스쿼드\n02-6713-1970',
  homp_url: 'https://www.tossbank.com/product-service/savings/account',
  cal_tel: '16617654',
};

export const FS_BANKS = [
  bankWoori,
  bankSc,
  bankCity,
  bankDg,
  bankBusan,
  bankKj,
  bankJeju,
  bankJb,
  bankKn,
  bankIbk,
  bankKdb,
  bankKb,
  bankShinhan,
  bankNonghyup,
  bankHana,
  bankK,
  bankSuhyup,
  bankKakao,
  bankToss,
];

const none = '1';
const seomin = '2';
const restriction = '3';

const getParsingJoinDeny = (check) => {
  let deny;
  switch (check) {
    case none:
      deny = '제한없음';
      break;
    case seomin:
      deny = '서민전용';
      break;
    case restriction:
      deny = '일부제한';
      break;
    default:
      deny = '-';
      break;
  }
  return deny;
};

const getDetail = (korCoNm) => {
  let content;
  switch (korCoNm) {
    case bankWoori.korCoNm:
      content = bankWoori.dcls_chrg_man;
      break;
    case bankSc.korCoNm:
      content = bankSc.dcls_chrg_man;
      break;
    case bankCity.korCoNm:
      content = bankCity.dcls_chrg_man;
      break;
    case bankDg.korCoNm:
      content = bankDg.dcls_chrg_man;
      break;
    case bankBusan.korCoNm:
      content = bankBusan.dcls_chrg_man;
      break;
    case bankKj.korCoNm:
      content = bankKj.dcls_chrg_man;
      break;
    case bankJeju.korCoNm:
      content = bankJeju.dcls_chrg_man;
      break;
    case bankJb.korCoNm:
      content = bankJb.dcls_chrg_man;
      break;
    case bankKn.korCoNm:
      content = bankKn.dcls_chrg_man;
      break;
    case bankIbk.korCoNm:
      content = bankIbk.dcls_chrg_man;
      break;
    case bankKdb.korCoNm:
      content = bankKdb.dcls_chrg_man;
      break;
    case bankKb.korCoNm:
      content = bankKb.dcls_chrg_man;
      break;
    case bankShinhan.korCoNm:
      content = bankShinhan.dcls_chrg_man;
      break;
    case bankNonghyup.korCoNm:
      content = bankNonghyup.dcls_chrg_man;
      break;
    case bankHana.korCoNm:
      content = bankHana.dcls_chrg_man;
      break;
    case bankK.korCoNm:
      content = bankK.dcls_chrg_man;
      break;
    case bankSuhyup.korCoNm:
      content = bankSuhyup.dcls_chrg_man;
      break;
    case bankKakao.korCoNm:
      content = bankKakao.dcls_chrg_man;
      break;
    case bankToss.korCoNm:
      content = bankToss.dcls_chrg_man;
      break;
    default:
      content = NONE;
      break;
  }
  return content;
};

export const getWRAPPER_DATA = (data) => {
  if (!data || data.length === 0) return data;

  const wrapperData = data.data.map((elObj) => {
    return {
      ...elObj,
      id: elObj.savingsId,
      joinDeny: getParsingJoinDeny(elObj[FS_D_JOIN_DENY.field]),
      dcls_chrg_man: getDetail(elObj[FS_D_KOR_CO_NM.field]),
      isChecked: false,
      isOpen: false,
    };
  });
  return wrapperData;
};
