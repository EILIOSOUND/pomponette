export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Politique de confidentialité</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 font-inter text-sm leading-relaxed text-dark-gray">
        <p className="text-dark-gray/60 text-xs">Dernière mise à jour : 21 avril 2026</p>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">1. Responsable du traitement</h2>
          <p>Le responsable du traitement des données est :</p>
          <div className="mt-2 space-y-1">
            <p><strong>Fabrice RICHARD</strong></p>
            <p>Pomponette</p>
            <p>Auto-entrepreneur — SIRET : 44046199400020 — RCS Brest</p>
            <p>
              7, Quelerec — 29840 Landunvez — France
            </p>
            <p>
              Email : <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">2. Données collectées</h2>
          <p>Nous collectons uniquement les données que vous nous fournissez volontairement :</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>adresse email (newsletter, contact)</li>
            <li>prénom (optionnel)</li>
            <li>message via le formulaire de contact</li>
          </ul>
          <p className="mt-2">
            Certaines données techniques peuvent également être collectées automatiquement (cookies, adresse IP, navigation).
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">3. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>l&apos;envoi de la newsletter (via Brevo)</li>
            <li>la réponse aux demandes de contact</li>
            <li>l&apos;amélioration de l&apos;expérience utilisateur</li>
            <li>l&apos;analyse de fréquentation du site</li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">4. Base légale</h2>
          <p>Le traitement de vos données repose sur :</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>votre consentement (newsletter, cookies)</li>
            <li>notre intérêt légitime (amélioration du site)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">5. Brevo (Sendinblue)</h2>
          <p>
            Nous utilisons Brevo pour la gestion de notre newsletter.<br />
            Vos données (email, prénom) sont transmises à Brevo et traitées conformément à leur{' '}
            <a href="https://www.brevo.com/fr/legal/privacypolicy/" rel="nofollow noopener" target="_blank" className="text-gold underline">politique de confidentialité</a>.
          </p>
          <p className="mt-2">Vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.</p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">6. Cookies</h2>
          <p>Nous utilisons des cookies pour :</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>le bon fonctionnement du site</li>
            <li>la mesure d&apos;audience</li>
            <li>l&apos;amélioration de l&apos;expérience utilisateur</li>
          </ul>
          <p className="mt-2">
            Vous pouvez modifier vos préférences à tout moment via le lien{' '}
            <strong>&quot;Gérer mes cookies&quot;</strong> présent sur le site, ou consulter notre{' '}
            <a href="/politique-cookies" className="text-gold underline">politique de cookies</a>.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">7. Liens affiliés</h2>
          <p>
            Le site Pomponette contient des liens affiliés vers des partenaires (notamment <strong>Espace Plaisir</strong>).<br />
            Lors d&apos;un clic sur ces liens, des cookies peuvent être déposés afin de suivre les ventes et permettre la perception d&apos;une commission.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">8. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>droit d&apos;accès</li>
            <li>droit de rectification</li>
            <li>droit d&apos;effacement</li>
            <li>droit d&apos;opposition</li>
            <li>droit à la limitation du traitement</li>
          </ul>
          <p className="mt-2">
            Pour exercer vos droits :{' '}
            <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">9. Conservation des données</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de votre dernière interaction avec le site.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">10. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles afin de protéger vos données personnelles.
          </p>
        </div>
      </section>
    </main>
  );
}
