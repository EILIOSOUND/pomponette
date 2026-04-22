export default function CGU() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Conditions Générales d&apos;Utilisation</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 font-inter text-sm leading-relaxed text-dark-gray">
        <p className="text-dark-gray/60 text-xs">Dernière mise à jour : 21 avril 2026</p>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">1. Objet</h2>
          <p>
            Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;utilisation du site <strong>Pomponette</strong>, accessible à l&apos;adresse :{' '}
            <a href="https://pomponette.pages.dev/" rel="nofollow noopener" target="_blank" className="text-gold underline">https://pomponette.pages.dev/</a>
          </p>
          <p className="mt-2">
            Pomponette est un site vitrine affilié dédié au bien-être intime.<br />
            En accédant au site, vous acceptez sans réserve les présentes conditions.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">2. Accès au site</h2>
          <p>
            L&apos;accès au site est strictement réservé aux personnes majeures (18 ans et plus).<br />
            En validant la vérification d&apos;âge, vous attestez sur l&apos;honneur être majeur(e).
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">3. Nature du service</h2>
          <p>Pomponette est un site d&apos;affiliation.<br />
          Les produits présentés sont vendus par des partenaires tiers, notamment <strong>Espace Plaisir</strong>.</p>
          <p className="mt-2">Pomponette n&apos;intervient pas dans :</p>
          <ul className="list-disc list-inside mt-1 space-y-1 pl-2">
            <li>les transactions</li>
            <li>la livraison</li>
            <li>le service après-vente</li>
            <li>les garanties produits</li>
          </ul>
          <p className="mt-2">Toute commande est réalisée directement sur les sites partenaires.</p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">4. Liens affiliés</h2>
          <p>
            Certains liens présents sur le site sont des liens affiliés.<br />
            Pomponette peut percevoir une commission sur les ventes générées, sans impact sur le prix final pour l&apos;utilisateur.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">5. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site (textes, images, éléments graphiques) est protégé par le droit d&apos;auteur.<br />
            Toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">6. Limitation de responsabilité</h2>
          <p>Pomponette ne saurait être tenu responsable des dommages directs ou indirects résultant :</p>
          <ul className="list-disc list-inside mt-1 space-y-1 pl-2">
            <li>de l&apos;utilisation du site</li>
            <li>de l&apos;accès aux sites partenaires</li>
            <li>des produits ou services proposés par ces derniers</li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">7. Données personnelles</h2>
          <p>Le site peut collecter certaines données via :</p>
          <ul className="list-disc list-inside mt-1 space-y-1 pl-2">
            <li>les cookies</li>
            <li>les formulaires (newsletter, contact)</li>
          </ul>
          <p className="mt-2">
            Ces données sont utilisées uniquement dans le cadre du fonctionnement du site et ne sont jamais revendues.
          </p>
          <p className="mt-2">
            Conformément au RGPD, vous pouvez demander la modification ou la suppression de vos données en contactant :{' '}
            <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">8. Éditeur du site</h2>
          <p>Le site Pomponette est édité par :</p>
          <div className="mt-2 space-y-1">
            <p><strong>Fabrice RICHARD</strong></p>
            <p>Auto-entrepreneur</p>
            <p>SIRET : 44046199400020</p>
            <p>RCS Brest</p>
            <p className="mt-2">
              Adresse :<br />
              7, Quelerec<br />
              29840 Landunvez<br />
              France
            </p>
            <p className="mt-2">Directeur de publication : Fabrice RICHARD</p>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">9. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <div className="mt-2 space-y-1">
            <p><strong>Cloudflare, Inc.</strong></p>
            <p>101 Townsend St</p>
            <p>San Francisco, CA 94107</p>
            <p>USA</p>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">10. Droit applicable</h2>
          <p>
            Les présentes CGU sont régies par le droit français.<br />
            Tout litige relève de la compétence des tribunaux français.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">11. Contact</h2>
          <p>Pour toute question : <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a></p>
        </div>
      </section>
    </main>
  );
}
