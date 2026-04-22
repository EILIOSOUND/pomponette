export default function MentionsLegales() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Mentions légales</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 font-inter text-sm leading-relaxed text-dark-gray">
        <p className="text-dark-gray/60 text-xs">Dernière mise à jour : 21 avril 2026</p>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Éditeur du site</h2>
          <p>Le site <strong>Pomponette</strong> est édité par :</p>
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
            <p className="mt-2">
              Email : <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Hébergement</h2>
          <p>Ce site est hébergé par :</p>
          <div className="mt-2 space-y-1">
            <p><strong>Cloudflare, Inc.</strong></p>
            <p>101 Townsend St</p>
            <p>San Francisco, CA 94107</p>
            <p>USA</p>
            <p><a href="https://www.cloudflare.com" rel="nofollow noopener" target="_blank" className="text-gold underline">www.cloudflare.com</a></p>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contenu réservé aux adultes</h2>
          <p>
            Ce site est exclusivement destiné aux personnes majeures (18 ans et plus).<br />
            En accédant à ce site, vous confirmez avoir l&apos;âge légal requis dans votre pays de résidence.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Nature du service</h2>
          <p>
            Pomponette est un site vitrine affilié dédié au bien-être intime.<br />
            Les produits présentés sont vendus par des partenaires tiers, notamment <strong>Espace Plaisir</strong>.<br />
            Pomponette n&apos;intervient pas dans les transactions, la livraison, le service après-vente ou les garanties produits.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, éléments graphiques) sont la propriété de Pomponette ou de ses partenaires et sont protégés par le droit d&apos;auteur.<br />
            Toute reproduction ou utilisation sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Liens affiliés</h2>
          <p>
            Ce site contient des liens affiliés vers des partenaires commerciaux.<br />
            Pomponette peut percevoir une commission sur les achats effectués via ces liens, sans coût supplémentaire pour vous.<br />
            Consultez notre <a href="/divulgation-affiliation" className="text-gold underline">divulgation d&apos;affiliation</a> pour plus d&apos;informations.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Données personnelles</h2>
          <p>
            Le site peut collecter certaines données via les cookies et les formulaires (newsletter, contact).<br />
            Ces données sont utilisées uniquement dans le cadre du fonctionnement du site et ne sont jamais revendues.<br />
            Conformément au RGPD, vous pouvez demander la modification ou la suppression de vos données en contactant :{' '}
            <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.<br />
            Tout litige relève de la compétence des tribunaux français.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contact</h2>
          <p>Pour toute question : <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a></p>
        </div>
      </section>
    </main>
  );
}
