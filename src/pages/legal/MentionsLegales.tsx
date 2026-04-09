export default function MentionsLegales() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Mentions légales</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-sm max-w-none space-y-8 font-inter text-dark-gray">
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Éditeur du site</h2>
            <p>Le site <strong>pomponette.dev</strong> est édité par :</p>
            <p><strong>Pomponette</strong><br />Email : <a href="mailto:xheinintime@gmail.com" className="text-gold">xheinintime@gmail.com</a></p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Hébergement</h2>
            <p>Ce site est hébergé par :<br /><strong>Cloudflare, Inc.</strong><br />101 Townsend St, San Francisco, CA 94107, États-Unis<br /><a href="https://www.cloudflare.com" rel="nofollow noopener" target="_blank" className="text-gold">www.cloudflare.com</a></p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contenu réservé aux adultes</h2>
            <p>Ce site est exclusivement destiné aux personnes majeures (18 ans et plus). En accédant à ce site, vous confirmez avoir l&apos;âge légal requis dans votre pays de résidence.</p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété de Pomponette ou de ses partenaires et sont protégés par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable.</p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Liens affiliés</h2>
            <p>Ce site contient des liens affiliés vers des partenaires commerciaux. Pomponette peut percevoir une commission sur les achats effectués via ces liens, sans coût supplémentaire pour vous. Consultez notre <a href="/divulgation-affiliation" className="text-gold underline">divulgation d&apos;affiliation</a> pour plus d&apos;informations.</p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contact</h2>
            <p>Pour toute question : <a href="mailto:xheinintime@gmail.com" className="text-gold">xheinintime@gmail.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
