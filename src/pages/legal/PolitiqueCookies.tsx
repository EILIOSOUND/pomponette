export default function PolitiqueCookies() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Politique de cookies</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-8 font-inter text-sm leading-relaxed text-dark-gray">
        <p>Dernière mise à jour : 8 avril 2026</p>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d&apos;un site web. Il permet de mémoriser vos préférences et d&apos;améliorer votre expérience.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Cookies utilisés sur Pomponette</h2>
          <div className="overflow-x-auto">
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
                  <td className="p-3">pomponette_age_verified</td>
                  <td className="p-3">Essentiel</td>
                  <td className="p-3">Session</td>
                  <td className="p-3">Vérification de l&apos;âge</td>
                </tr>
                <tr className="border-b border-black/10 bg-cream/50">
                  <td className="p-3">pomponette_cookie_consent</td>
                  <td className="p-3">Essentiel</td>
                  <td className="p-3">1 an</td>
                  <td className="p-3">Mémorisation du consentement cookies</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-3">_ga, _gid</td>
                  <td className="p-3">Analytique</td>
                  <td className="p-3">2 ans</td>
                  <td className="p-3">Mesure d&apos;audience (Google Analytics)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Gestion de vos préférences</h2>
          <p>Vous pouvez modifier vos préférences à tout moment via la bannière de cookies présente sur le site, ou en configurant votre navigateur pour refuser les cookies.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contact</h2>
          <p>Pour toute question : <a href="mailto:xheinintime@gmail.com" className="text-gold">xheinintime@gmail.com</a></p>
        </div>
      </section>
    </main>
  );
}
