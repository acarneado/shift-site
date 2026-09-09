# Audit SEO — site SHIFT

Date : 09/09/2026
Auteur : Claude (session Claude Code), à la demande d'Alexandre Carneado.

## Méthode et limites

- Basé sur une **lecture directe du code source réel déployé** (ce dépôt), pas sur une navigation live du site — l'environnement d'exécution n'a pas d'accès réseau sortant vers `shift-site-kappa.vercel.app`.
- Le document de fondations du projet (`SHIFT_Fondations_Projet.md`, projet Claude.ai "SHIFT - site web") n'était pas disponible depuis cette session. Deux points ne sont donc pas vérifiés ici : la couverture stricte des thématiques SEO normatives et la conformité exacte à la sitemap V1 de référence.
- Non mesurable depuis cet environnement : Core Web Vitals réels, indexation effective dans Google. À vérifier via PageSpeed Insights / Google Search Console une fois un domaine dédié en place.

## Synthèse

Base technique saine : chaque page a un H1 unique, un `title`/`description` propres et différenciés, des URLs propres, un site responsive. Le principal trou identifié était l'**absence totale d'infrastructure d'indexation** (pas de sitemap, pas de robots.txt, pas de partage social) et une **image non optimisée**. Second point structurant : le site vit encore sur un sous-domaine Vercel, à migrer avant toute action de référencement actif.

## Constats par sévérité

### Bloquant

1. **Aucun `robots.txt` ni `sitemap.xml`** (fait observé, absents du dépôt au moment de l'audit).
   → **Corrigé le 09/09/2026** : `app/sitemap.js` et `app/robots.js` ajoutés (génération native Next.js), servis sur `/sitemap.xml` et `/robots.txt`.

2. **Aucune métadonnée Open Graph / Twitter Card, pas de `metadataBase`** (fait observé). Un lien SHIFT partagé sur LinkedIn n'affiche aucun aperçu (image, titre) — nuit au CTR de partage.
   → **Corrigé le 09/09/2026** : `metadataBase`, `openGraph` et `twitter` (summary_large_image) ajoutés dans `app/layout.js` et surchargés dans chaque `page.js`. Titre/description restent volontairement identiques partout ; seule l'image change par page (`public/images/og/<slug>.jpg`, 9 rendus 1200×630, générés depuis `scripts/og-image.html` par `scripts/generate-og-images.js`), avec une étiquette de section (« Diagnostic », « Coaching individuel »...) pour donner un repère visuel sur la provenance du lien partagé.

3. **Site en production sur `shift-site-kappa.vercel.app`, pas de domaine dédié** (fait observé, déjà signalé dans les mentions légales comme `[À COMPLÉTER]`). Un sous-domaine générique inspire moins confiance et toute indexation démarrée ici devra être migrée (redirections 301) vers le futur domaine.
   → **Non traité** — dépend d'une action côté éditeur (achat de domaine).

### Important

4. **Aucune donnée structurée (JSON-LD)** — pas de schéma `Person`/`ProfessionalService`.
   → **Non traité** dans ce lot.

5. **Photo de profil non optimisée** : fichier natif 859×964 px / 71 Ko chargé via une balise `<img>` classique (Accueil, Le Déclic), sans `next/image`.
   → **Corrigé le 09/09/2026** : migration vers le composant `<Image>` de Next.js sur les deux pages (redimensionnement, formats modernes automatiques, `sizes` renseigné).

6. **Pas de balise canonical.** Risque faible aujourd'hui, utile lors de la migration de domaine pour éviter tout signal de contenu dupliqué.
   → **Non traité**.

7. **H1 de l'accueil** ("Vous pouvez occuper votre rôle. Et l'incarner pleinement.") — *déduction, pas un défaut tranché* : ligne de marque forte, cohérente avec un ton humain, mais sans terme de recherche probable. Arbitrage marque/SEO à trancher avec le document de fondations en main.
   → Point de discussion, pas une action de code.

### Mineur

8. Pas de `manifest.json` / icônes complémentaires au-delà du favicon — plutôt UX/PWA que SEO pur.
9. Pas de `themeColor` pour la barre d'adresse mobile — cosmétique.

## Priorités identifiées (ordre recommandé)

1. Domaine dédié — condition préalable à toute action SEO sérieuse.
2. ~~`sitemap.xml` + `robots.txt`~~ — **fait**.
3. Open Graph / partage social — impact rapide sur la crédibilité perçue.
4. ~~Migration de la photo vers `next/image`~~ — **fait**.
5. JSON-LD `Person` — peu coûteux une fois les bases posées.

## Suivi

| Action | Statut | Date |
|---|---|---|
| `sitemap.xml` + `robots.txt` | ✅ Fait | 09/09/2026 |
| Migration photo → `next/image` | ✅ Fait | 09/09/2026 |
| Open Graph / Twitter Card / `metadataBase` | ✅ Fait | 09/09/2026 |
| Domaine dédié | ⬜ À faire (dépend de l'achat du domaine) | — |
| JSON-LD `Person` | ⬜ À faire | — |
| Balise canonical | ⬜ À faire | — |
