/* eslint-disable max-len */
import { FC, useMemo, useState } from 'react';

export const Classif:FC = () => {
  const methods = [
    {
      title: 'Переліки контрольних запитань',
      descr: '',
      type1: '1',
      type2: '2',
      type3: '2',
      type4: '2',
      type5: '1',
    },
    {
      title: 'Попереднє аналізування небезпечних чинників',
      descr: '',
      type1: '1',
      type2: '2',
      type3: '4',
      type4: '3',
      type5: '1',
    },
    {
      title: 'Структуроване опитування і “мозкова атака”',
      descr: '',
      type1: '2',
      type2: '2',
      type3: '2',
      type4: '2',
      type5: '1',
    },
    {
      title: 'Метод Дельфі',
      descr: '',
      type1: '2',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '1',
    },
    {
      title: 'SWIFT (Структурований метод “Що-якщо”)',
      descr: '',
      type1: '2',
      type2: '3',
      type3: '3',
      type4: '1',
      type5: '1',
    },
    {
      title: 'Загальне оцінювання надійності людини (HRA)',
      descr: '',
      type1: '2',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Аналізування першопричини(аналізування окремої втрати)',
      descr: '',
      type1: '3',
      type2: '3',
      type3: '2',
      type4: '3',
      type5: '1',
    },
    {
      title: 'Аналізування сценарію',
      descr: '',
      type1: '3',
      type2: '3',
      type3: '4',
      type4: '3',
      type5: '1',
    },
    {
      title: 'Загальне оцінювання екологічного ризику',
      descr: '',
      type1: '3',
      type2: '4',
      type3: '4',
      type4: '3',
      type5: '1',
    },
    {
      title: 'Аналізування впливу на діяльність',
      descr: '',
      type1: '3',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Аналізування дерева відмов',
      descr: '',
      type1: '3',
      type2: '4',
      type3: '4',
      type4: '3',
      type5: '1',
    },
    {
      title: 'Аналізування дерева подій',
      descr: '',
      type1: '3',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Аналізування причин і наслідків',
      descr: '',
      type1: '3',
      type2: '4',
      type3: '3',
      type4: '4',
      type5: '2',
    },
    {
      title: 'Аналізування причинно-наслідкових зв’язків',
      descr: '',
      type1: '3',
      type2: '2',
      type3: '2',
      type4: '3',
      type5: '1',
    },
    {
      title: 'FMEA та FMECA',
      descr: '',
      type1: '4',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Технічне обслуговування, зорієнтоване на забезпечення безвідмовності',
      descr: '',
      type1: '4',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Аналізування паразитних ефектів(аналізування паразитних систем)',
      descr: '',
      type1: '4',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '1',
    },
    {
      title: 'HAZOP Дослідження небзпечних чинників і працездатності',
      descr: '',
      type1: '4',
      type2: '3',
      type3: '4',
      type4: '4',
      type5: '1',
    },
    {
      title: 'HACCP( Аналізування небезпечних чинників і критичні точки контролю)',
      descr: '',
      type1: '4',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '1',
    },
    {
      title: 'LOPA (Аналізування рівнів захисту)',
      descr: '',
      type1: '5',
      type2: '3',
      type3: '3',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Аналізування за схемою «краватка-метелик»',
      descr: '',
      type1: '5',
      type2: '3',
      type3: '4',
      type4: '3',
      type5: '2',
    },
    {
      title: 'Марковське аналізування',
      descr: '',
      type1: '6',
      type2: '4',
      type3: '2',
      type4: '4',
      type5: '2',
    },
    {
      title: 'Імітаційне моделювання за методом Монте-карло',
      descr: '',
      type1: '6',
      type2: '4',
      type3: '2',
      type4: '4',
      type5: '2',
    },
    {
      title: 'Байєсівське аналізування',
      descr: '',
      type1: '6',
      type2: '4',
      type3: '2',
      type4: '4',
      type5: '2',
    },
  ];
  const [type1, setType1] = useState('0');
  const [type2, setType2] = useState('1');
  const [type3, setType3] = useState('1');
  const [type4, setType4] = useState('1');
  const [type5, setType5] = useState('0');
  const visibleMethods = useMemo(() => methods.filter(el => (
    (el.type1 === type1 || type1 === '0')
    && (el.type2 === type2 || type2 === '1')
    && (el.type3 === type3 || type3 === '1')
    && (el.type4 === type4 || type4 === '1')
    && (el.type5 === type5 || type5 === '0')
  )), [type1, type2, type3, type4, type5]);

  return (
    <div>
      <label htmlFor="type1">Оберіть тип методу загального оцінювання ризику</label>
      <select name="type1" id="type1" value={type1} onChange={(e) => setType1(e.target.value)}>
        <option value="0">Будь-який</option>
        <option value="1">МЕТОДИ ПОШУКУ</option>
        <option value="2">ДОПОМІЖНІ МЕТОДИ</option>
        <option value="3">АНАЛІЗУВАННЯ СЦЕНАРІЮ</option>
        <option value="4">ФУНКЦІЙНЕ АНАЛІЗУВАННЯ</option>
        <option value="5">ЗАГАЛЬНЕ ОЦІНЮВАННЯ ЗАСОБІВ КОНТРОЛЮВАННЯ</option>
        <option value="6">СТАТИСТИЧНІ МЕТОДИ</option>
      </select>
      <br />
      <label htmlFor="type2">Оберіть важливість ресурсів та можливостей</label>
      <select name="type2" id="type2" value={type2} onChange={(e) => setType2(e.target.value)}>
        <option value="1">Будь-який</option>
        <option value="2">Низька</option>
        <option value="3">Середня</option>
        <option value="4">Висока</option>
      </select>
      <br />
      <label htmlFor="type3">Оберіть характеру і ступеню невизначенності</label>
      <select name="type3" id="type3" value={type3} onChange={(e) => setType3(e.target.value)}>
        <option value="1">Будь-який</option>
        <option value="2">Низька</option>
        <option value="3">Середня</option>
        <option value="4">Висока</option>
      </select>
      <br />
      <label htmlFor="type4">Оберіть важливість складності</label>
      <select name="type4" id="type4" value={type4} onChange={(e) => setType4(e.target.value)}>
        <option value="1">Будь-який</option>
        <option value="2">Низька</option>
        <option value="3">Середня</option>
        <option value="4">Висока</option>
      </select>
      <br />
      <label htmlFor="type5">Оберіть чи уможливлює отримання кількісних вихідних даних</label>
      <select name="type5" id="type5" value={type5} onChange={(e) => setType5(e.target.value)}>
        <option value="0">Будь-який</option>
        <option value="1">Ні</option>
        <option value="2">Так</option>
      </select>
      <ul>
        {visibleMethods.map(el => (
          <li key={el.title}>
            <span>{el.title}</span>
            <span>{el.descr}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
