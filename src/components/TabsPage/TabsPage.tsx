/* eslint-disable max-len */
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { useMemo } from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = useMemo(
    () => (
      tabs.find(tab => tab.id === tabId)
    ),
    [tabId],
  );

  return (
    <>
      <h1 className="title">Інформаційна система екологічних, соціальних, енергетичних, економічних  викликів і ризиків сталого розвитку України</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classnames({
                'is-active': (
                  tabId === tab.id
                ),
              })}
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          // eslint-disable-next-line react/no-array-index-key
          ? selectedTab.content.map((el, ind:number) => (<p className="paragraph" key={ind}>{el}</p>))
          : 'Будь ласка оберіть інформацію яка вас цікавить'}
        {selectedTab?.id === 'tab-3' && (
          <table>
            <thead>
              <tr>
                <th scope="col">Екологічні виклики</th>
                <th scope="col">Соціальні виклики</th>
                <th scope="col">Енергетичні виклики</th>
                <th scope="col">Економічні виклики</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>глобальне потепління</td>
                <td>міграція, як в межах країни так і за її межі</td>
                <td>технічний стан застарілих електростанцій</td>
                <td>втрата і пошкодження підприємств, посівних площ</td>
              </tr>
              <tr>
                <td>втрата біорізноманіття рослин та тварин</td>
                <td>втрата або пошкодження житла, втрата роботи, доходів і рівня життя, який був до війниy</td>
                <td>фінансові втрати через брудний імпорт</td>
                <td>втрата або пошкодження житла</td>
              </tr>
              <tr>
                <td>забруднення води, повітря, ґрунтів</td>
                <td>раптова смерть близьких, розлука з близькими, розірвані зв’язки зі знайомими чи рідними з Росії та Білорусіs</td>
                <td>кліматичні ризики через не скорочення викидів парникових газів </td>
                <td>втрата роботи, доходів і рівня життя, який був до війни, окремих людей</td>
              </tr>
              <tr>
                <td>загроза радіаційного зараження територій півдня України через хитке становище Запорізької АЕС, пов’язане з непевними діями окупантів.</td>
                <td>
                  зростання медіаспоживання, новинозалежність,зміна споживацької поведінки
                </td>
                <td>екологічні ризики  через забруднення повітря та малу тривалість життя</td>
                <td>руйнування інфраструктури</td>
              </tr>
              <tr>
                <td>екологічні ризики  через забруднення повітря та малу тривалість життя</td>
                <td>демографічна криза через високі смертність та міграцію, низьку народжуваність</td>
                <td>політичне ризики: зближення з ЄС під питанням через розбіжності в питаннях Green Deal</td>
                <td>втрата робочих рук</td>
              </tr>
              <tr>
                <td>Руйнування греблі Каховської ГЕС і як результат повінь в одних місцинах і витіснення з місць проживання багатьох тварин та ерозія ґрунтів з опустелюванням в інших; 150 тонн нафти та 60 тонн хімікатів вилилися в річку Дніпро.</td>
                <td>Руйнування греблі Каховської ГЕС, руйнування будівель, втрата майна, загибель одних людей та витіснення з місць проживання інших</td>
                <td>Руйнування греблі Каховської ГЕС. На енергетичний сектор припадає значна частка загальних збитків, заподіяних вибухом на гідроелектростанції, яка становить $600 млн. </td>
                <td>Руйнування греблі Каховської ГЕС. Промислове виробництво в постраждалому регіоні припинилося через відсутність водопостачання для виробничих цілей, зруйновано 31 іригаційну систему</td>
              </tr>
            </tbody>
          </table>

        )}
      </div>
    </>
  );
};
