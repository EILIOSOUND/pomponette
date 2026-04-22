export default function PolitiqueCookies() {
  const handleResetCookies = () => {
    localStorage.removeItem('pomponette_cookie_consent');
    window.dispatchEvent(new Event('pomponette_reset_cookies'));
  };

  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Politique de cookies</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 font-inter text-sm leading-relaxed text-dark-gray">
        <p className="text-dark-gray/60 text-xs">Dernière mise à jour : 21 avril 2026</p>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d&apos;un site web.
            Il permet de mémoriser vos préférences et d&apos;améliorer votre expérience de navigation.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Cookies utilisés sur Pomponette</h2>
          <div className="overflow-x-auto rounded-lg border border-black/10">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-black text-cream">
                  <th className="p-3 text-left font-inter font-medium">Nom</th>
                  <th className="p-3 text-left font-inter font-medium">Type</th>
                  <th className="p-3 text-left font-inter font-medium">Durée</th>
                  <th className="p-3 text-left font-inter font-medium">Finalité</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <td className="p-3 font-mono">pomponette_age_verified</td>
                  <td className="p-3">Essentiel</td>
                  <td className="p-3">Session</td>
                  <td className="p-3">Vérification de l&apos;âge (+18)</td>
                </tr>
                <tr className="border-b border-black/10 bg-cream/50">
                  <td className="p-3 font-mono">pomponette_cookie_consent</td>
                  <td className="p-3">Essentiel</td>
                  <td className="p-3">1 an</td>
                  <td className="p-3">Mémorisation du consentement cookies</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-3 font-mono">_ga, _gid</td>
                  <td className="p-3">Analytique</td>
                  <td className="p-3">2 ans / 24h</td>
                  <td className="p-3">Mesure d&apos;audience — chargé uniquement après consentement</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-3 font-mono">kwk_*</td>
                  <td className="p-3">Marketing</td>
                  <td className="p-3">Variable (jusqu&apos;à 30 jours)</td>
                  <td className="p-3">Suivi des conversions affiliées (attribution des ventes) — Espace Plaisir via Kwanko</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Cookies essentiels</h2>
          <p>
            Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
            Ils mémorisent votre vérification d&apos;âge et vos préférences de consentement.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Cookies analytiques</h2>
          <p>
            Ces cookies permettent de mesurer l&apos;audience du site de façon anonymisée.
            Ils ne sont <strong>chargés qu&apos;après votre consentement explicite</strong> — aucun script analytics
            ne s&apos;exécute avant que vous ayez accepté.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Cookies affiliés (marketing)</h2>
          <p>
            Lors d&apos;un clic sur un lien affilié vers <strong>Espace Plaisir</strong>, des cookies peuvent être déposés
            par la plateforme <strong>Kwanko</strong> afin de suivre les ventes et permettre la perception d&apos;une commission.
            Ces cookies sont soumis à la politique de confidentialité de Kwanko.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Gestion de vos préférences</h2>
          <p>
            Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien{' '}
            <button
              onClick={handleResetCookies}
              className="text-gold underline cursor-pointer font-medium hover:text-gold/80 transition-colors"
            >
              Gérer mes cookies
            </button>{' '}
            présent dans le footer du site, ou en configurant votre navigateur pour refuser les cookies.
          </p>
          <p className="mt-2">
            Notez que le refus de certains cookies peut affecter votre expérience de navigation.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contact</h2>
          <p>
            Pour toute question :{' '}
            <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
