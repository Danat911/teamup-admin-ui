import React, { FC } from "react";
import classNames from "classnames";

import s from "./Stats.module.scss";

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
  return (
    <div className={s.stats}>
      {[
        {
          title: "Всего мероприятий",
          count: "335 003",
        },
        {
          title: "Всего участников",
          count: "1 335 003",
        },
      ].map(({ title, count }) => (
        <div className={s.statsCard} key={title}>
          <div className={s.statsCard__title}>{title}</div>
          <div className={s.statsCard__count}>{count}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
