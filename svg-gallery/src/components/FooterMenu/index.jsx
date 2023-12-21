import { useCallback, useState } from 'react';

export const FooterMenu = ({ menu = {} }) => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  const ItemList = () =>
    menu?.items.map((i) => (
      <div key={i.title}>
        <a href={i.url} className="block py-4 md:py-0">
          {i.title}
        </a>
      </div>
    ));

  return (
    <div
      className="w-full border-b border-border-ft-item md:border-b-0 md:w-fit"
      key={menu?.title}
    >
      <h4
        className="font-bold py-5 md:py-0 md:mb-4 md:pointer-events-none"
        onClick={toggleActive}
      >
        {menu?.title}
      </h4>
      <div className={`${!active && 'hidden'} md:block`}>
        <ItemList />
      </div>
    </div>
  );
};
