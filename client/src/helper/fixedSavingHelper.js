import ibnk from '../asset/images/bnk.svg';
import icity from '../asset/images/city.svg';
import idgb from '../asset/images/dgb.svg';
import ihana from '../asset/images/hana.svg';
import iibk from '../asset/images/ibk.svg';
import ijbb from '../asset/images/jbb.svg';
import ijeju from '../asset/images/jeju.svg';
import ik from '../asset/images/k.svg';
import ikakao from '../asset/images/kakao.svg';
import ikb from '../asset/images/kb.svg';
import ikdb from '../asset/images/kdb.svg';
import ikjb from '../asset/images/kjb.svg';
import inh from '../asset/images/nh.svg';
import isci from '../asset/images/sci.svg';
import ish from '../asset/images/sh.svg';
import isinhyup from '../asset/images/sinhyup.svg';
import itoss from '../asset/images/toss.svg';
import iwoo from '../asset/images/woo.svg';
import iwoori from '../asset/images/woori.svg';

const NONE = '-';

//Data key
const setData = (field, headerName, description) => ({
  field: field,
  headerName: headerName,
  description: description ? description : undefined,
});
const savingsId = setData('savingsId');
const interestId = setData('interestId');
const korCoNm = setData('korCoNm', '은행명');
const finPrdtNm = setData('finPrdtNm', '상품명');
const joinWay = setData('joinWay', '가입방법');
const spclCnd = setData('spclCnd', '우대조건');
const joinDeny = setData(
  'joinDeny',
  '가입대상',
  '제한없음 : 일반인 대상의 상품\n서민전용 : 기초생활수급자 등 서민우대상품으로 상세정보의 가입대상 요건 확인\n일부제한 : 특정인 대상 상품으로 상세정보의 가입대상 요건 확인'
);
const joinMember = setData('joinMember', '가입조건');
const etcNote = setData('etcNote', '상세조건');
const maxLimit = setData('maxLimit', '한도');
const intrRateTypeNm = setData(
  'intrRateTypeNm',
  '이자계산방식',
  '단리 : 원금에 대해서만 약정한 이자율을 적용하여 이자를 지급하는 방식\n복리 : 가입기간 중 월 또는 연 단위로 발생한 이자를 원금에 합산하고 합산한 금액을 새로운 원금으로 하여 그 다음 월 또는 연의 이자를 계산하는 방식'
);
const rsrvTypeNm = setData(
  'rsrvTypeNm',
  '적립방식',
  '정액적립식 : 매월 일정한 금액을 납입하는 방식\n자유적립식 : 금액을 정하지 않고 자유롭게 납입하는 방식'
);
const saveTrm = setData('saveTrm', '가입기간');
const mtrtInt = setData('mtrtInt', '만기 후 이자율');
const intrRate = setData('intrRate', '기본금리');
const intrRate2 = setData('intrRate2', '최고우대금리');
const dcls_chrg_man = setData('dcls_chrg_man', '문의');
const interestAmount = setData('interestAmount', '예상이자', '계산식');

//서버랑상관없음
const detail = setData('detail', '상세보기');

export const getFS_DATA = () => ({
  savingsId,
  interestId,
  korCoNm,
  finPrdtNm,
  joinWay,
  spclCnd,
  joinDeny,
  joinMember,
  etcNote,
  maxLimit,
  intrRateTypeNm,
  rsrvTypeNm,
  saveTrm,
  mtrtInt,
  intrRate,
  intrRate2,
  dcls_chrg_man,
  interestAmount,
  detail,
});

const setBank = (
  korCoNm,
  finCoNo,
  dcls_chrg_man,
  homp_url,
  cal_tel,
  image
) => ({
  korCoNm: korCoNm,
  finCoNo: finCoNo,
  dcls_chrg_man: dcls_chrg_man,
  homp_url: homp_url,
  cal_tel: cal_tel,
  isChecked: false,
  image: image,
});

const woori = setBank(
  '우리은행',
  '0010001',
  '개인고객부\n1588-5000\n부동산금융부\n1588-5000',
  'https://spot.wooribank.com/pot/Dream?withyou=po',
  '15885000',
  iwoori
);
const sc = setBank(
  '한국스탠다드차타드은행',
  '0010002',
  'SC제일은행 고객센터\n1588-1599',
  'http://www.standardchartered.co.kr',
  '15881599',
  isci
);
//TODO 추가해야됨
const city = setBank(
  '한국씨티은행',
  '0010006',
  undefined,
  'https://www.citibank.co.kr',
  undefined,
  icity
);
const dg = setBank(
  '대구은행',
  '0010016',
  '개연여신기획부\n053-740-2230\n리테일마케팅부\n053-740-2162',
  'http://www.dgb.co.kr/dgb_ebz_main.jsp',
  '15885050',
  idgb
);
const busan = setBank(
  '부산은행',
  '0010017',
  '(예금)마케팅추진부\n051-620-3339\n(대출)여신기획부\n051-620-3423',
  'http://www.busanbank.co.kr',
  '15886200',
  ibnk
);
const kj = setBank(
  '광주은행',
  '0010019',
  '영업추진부/수신지원팀\n062-239-5206\n여신지원팀\n062-239-6509\n카드사업부 062-239-6107',
  'http://www.kjbank.com',
  '15883388',
  ikjb
);
const jeju = setBank(
  '제주은행',
  '0010020',
  '영업추진본부\n064-720-0287',
  'https://e-jejubank.com',
  '15880079',
  ijeju
);
const jb = setBank(
  '전북은행',
  '0010022',
  '마케팅추진부/마케팅추진팀\n063-250-7381\n여신기획부\n063-250-7370',
  'https://www.jbbank.co.kr/EFINANCE_MAIN.act',
  '15884477',
  ijbb
);
const kn = setBank(
  '경남은행',
  '0010024',
  '리테일금융부(대출문의)\n055-290-8743\n마케팅추진부(예·적금상품)\n055-290-8315',
  'https://www.knbank.co.kr/ib20/mnu/FPMDPT020000000',
  '16008585',
  iwoo
);
const ibk = setBank(
  '중소기업은행',
  '0010026',
  '고객 문의\n1566-2566',
  'http://www.ibk.co.kr',
  '15662566',
  iibk
);
const kdb = setBank(
  '한국산업은행',
  '0010030',
  '(예금)02-1588-1500\n(개인대출)네트워크지원실\n02-787-5638\n(기업대출)영업기획부\n02-787-6929',
  'http://www.kdb.co.kr',
  '0215881500',
  ikdb
);
const kb = setBank(
  '국민은행',
  '0010927',
  '(예금)수신상품부\n02-1588-9999\n(대출)개인여신부\n02-1588-9999',
  'http://www.kbstar.com',
  '15889999',
  ikb
);
const shinhan = setBank(
  '신한은행',
  '0011625',
  '개인고객부\n1577-8000(수신)\n개인고객부\n1577-8000(여신)',
  'http://www.shinhan.com',
  '15778000',
  ish
);
//TODO 농협 finCoNo
const nonghyup = setBank(
  '농협은행주식회사',
  undefined,
  '마케팅지원부\n02-2080-7786(여신)\n7731(수신)',
  'https://banking.nonghyup.com',
  '16613000',
  inh
);
const hana = setBank(
  '하나은행',
  '0013909',
  '가계수신(예금)\n02-1599-1111(리테일사업부)\n가계여신(대출)\n02-2002-1249(리테일사업부)',
  'http://www.hanabank.com',
  '15991111',
  ihana
);
const k = setBank(
  '주식회사 케이뱅크',
  '0014674',
  '수신팀\n02-3210-7312',
  'https://ib.kbanknow.com/ib20/mnu/FPMDPT010000',
  '15221000',
  ik
);
const suhyup = setBank(
  '수협은행',
  '0014807',
  '개인금융부(수신)\n1588-1515\n개인금융부(여신)\n1588-1515',
  'http://www.suhyup-bank.com',
  '15881515',
  isinhyup
);
const kakao = setBank(
  '주식회사 카카오뱅크',
  '0015130',
  '수신팀\n1599-3333\n여신팀\n1599-3333',
  'https://www.kakaobank.com/',
  '15993333',
  ikakao
);
const toss = setBank(
  '토스뱅크 주식회사',
  '0017801',
  '수신스쿼드\n02-6713-1952\n여신스쿼드\n02-6713-1970',
  'https://www.tossbank.com/product-service/savings/account',
  '16617654',
  itoss
);
export const getFS_BANKS = () => [
  woori,
  sc,
  city,
  dg,
  busan,
  kj,
  jeju,
  jb,
  kn,
  ibk,
  kdb,
  kb,
  shinhan,
  nonghyup,
  hana,
  k,
  suhyup,
  kakao,
  toss,
];

export const getRSRV_TYPE = (value) => {
  let result;
  switch (value) {
    case -1:
      result = '전체';
      break;
    case 'S':
      result = '정액적립식';
      break;
    case 'F':
      result = '자유적립식';
      break;
    default:
      result = '전체';
  }
  return result;
};

export const geINTR_RATE_TYPE = (value) => {
  let result;
  switch (value) {
    case -1:
      result = '전체';
      break;
    case 'S':
      result = '단리';
      break;
    case 'M':
      result = '복리';
      break;
    default:
      result = '전체';
  }
  return result;
};

export const getJOIN_DENY = (value) => {
  let result;
  switch (value) {
    case -1:
      result = '전체';
      break;
    case 1:
      result = '제한없음';
      break;
    case 2:
      result = '서민전용';
      break;
    case 3:
      result = '일부제한';
      break;
    default:
      result = '전체';
  }
  return result;
};

const getDetail = (korCoNm) => {
  let content;
  switch (korCoNm) {
    case woori.korCoNm:
      content = woori.dcls_chrg_man;
      break;
    case sc.korCoNm:
      content = sc.dcls_chrg_man;
      break;
    case city.korCoNm:
      content = city.dcls_chrg_man;
      break;
    case dg.korCoNm:
      content = dg.dcls_chrg_man;
      break;
    case busan.korCoNm:
      content = busan.dcls_chrg_man;
      break;
    case kj.korCoNm:
      content = kj.dcls_chrg_man;
      break;
    case jeju.korCoNm:
      content = jeju.dcls_chrg_man;
      break;
    case jb.korCoNm:
      content = jb.dcls_chrg_man;
      break;
    case kn.korCoNm:
      content = kn.dcls_chrg_man;
      break;
    case ibk.korCoNm:
      content = ibk.dcls_chrg_man;
      break;
    case kdb.korCoNm:
      content = kdb.dcls_chrg_man;
      break;
    case kb.korCoNm:
      content = kb.dcls_chrg_man;
      break;
    case shinhan.korCoNm:
      content = shinhan.dcls_chrg_man;
      break;
    case nonghyup.korCoNm:
      content = nonghyup.dcls_chrg_man;
      break;
    case hana.korCoNm:
      content = hana.dcls_chrg_man;
      break;
    case k.korCoNm:
      content = k.dcls_chrg_man;
      break;
    case suhyup.korCoNm:
      content = suhyup.dcls_chrg_man;
      break;
    case kakao.korCoNm:
      content = kakao.dcls_chrg_man;
      break;
    case toss.korCoNm:
      content = toss.dcls_chrg_man;
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
      id: elObj.interestId,
      dcls_chrg_man: getDetail(elObj[korCoNm.field]),
    };
  });
  return wrapperData;
};
