export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Politique de confidentialité</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-8 font-inter text-sm leading-relaxed text-dark-gray">
        <p>Dernière mise à jour : 8 avril 2026</p>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">1. Responsable du traitement</h2>
          <p>Pomponette — xheinintime@gmail.com</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">2. Données collectées</h2>
          <p>Nous collectons uniquement les données que vous nous fournissez volontairement : adresse email (newsletter, contact), prénom (optionnel), message de contact.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">3. Finalités du traitement</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Envoi de la newsletter (via Brevo)</li>
            <li>Réponse aux demandes de contact</li>
            <li>Amélioration de l&apos;expérience utilisateur</li>
          </ul>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">4. Brevo (Sendinblue)</h2>
          <p>Nous utilisons Brevo pour la gestion de notre newsletter. Vos données (email, prénom) sont transmises à Brevo et traitées conformément à leur <a href="https://www.brevo.com/fr/legal/privacypolicy/" rel="nofollow noopener" target="_blank" className="text-gold underline">politique de confidentialité</a>.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">5. Cookies</h2>
          <p>Nous utilisons des cookies pour le bon fonctionnement du site et l&apos;analyse d&apos;audience. Consultez notre <a href="/politique-cookies" className="text-gold underline">politique de cookies</a>.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition. Contactez-nous à <a href="mailto:xheinintime@gmail.com" className="text-gold">xheinintime@gmail.com</a>.</p>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">7. Conservation des données</h2>
          <p>Vos données sont conservées pendant 3 ans à compter de votre dernière interaction avec Pomponette.</p>
        </div>
      </section>
    </main>
  );
}
