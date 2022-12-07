export default function Index() {
  return (
    <div className="box">
      <h6 className="box__heading">Meeskond</h6>

      <div className="box__content">
        <img
          className="box__content__img"
          src="https://slava-saun-cms.fly.dev/storage/media/13/Photo.png"
          alt="Meeskond"
        />

        <div className="box__content__right-content">
          <span className="box__content__right-content__subtitle">Alampealkiri</span>

          <p className="box__content__right-content__paragraph">Ja siin on siis kirjeldus</p>

          <div className="box__content__right-content__button">
            <a href="/" className="box__content__right-content__button__link">
              <span className="box__content__right-content__button__link__content">Vaata veel {'>'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
