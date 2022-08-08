import { DateTime } from './luxon.js';

export default function datejs() {
  const time = document.querySelector('.time');

  const realTime = () => {
    const dt = DateTime.now();

    const suff = dt.toFormat('d');

    function getNumberSuffix(num) {
      const th = 'th';
      const rd = 'rd';
      const nd = 'nd';
      const st = 'st';

      if (num === 11 || num === 12 || num === 13) return th;

      const lastDigit = num.toString().slice(-1);

      switch (lastDigit) {
        case '1': return st;
        case '2': return nd;
        case '3': return rd;
        default: return th;
      }
    }

    const suffix = getNumberSuffix(suff);

    time.innerHTML = `${dt.toFormat('LLLL d')}${suffix} ${dt.toFormat('yyyy')}, ${dt.toLocaleString(DateTime.TIME_WITH_SECONDS)} `;

    setTimeout(() => { realTime(); }, 1000);
  };
  realTime();
}
