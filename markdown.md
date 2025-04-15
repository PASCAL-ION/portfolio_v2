# 📘 Cahier des Charges - Application Anti-Gaspi Alimentaire

## 🧭 Objectif de l'application

Créer une application mobile/web permettant aux utilisateurs de **réduire leur gaspillage alimentaire**, d’**optimiser leur consommation**, et de **suivre leurs stocks à domicile** grâce à un système intelligent et automatisé, incluant le **scan de tickets de caisse**.

---

## 🧑‍💻 Utilisateurs cibles

- Familles
- Étudiants
- Colocations
- Consommateurs soucieux de l’environnement
- Communautés locales de partage

---

## 🧩 Fonctionnalités

### 1. 📷 Scan de ticket de caisse (OCR)
- Lecture automatique des tickets via l’appareil photo.
- Extraction des produits et ajout à l’inventaire.
- Reconnaissance des quantités, marques, catégories.
- Option de correction manuelle post-scan.
- Estimation automatique de la date de péremption par produit.

---

### 2. 🗃️ Inventaire intelligent
- Visualisation de tous les produits disponibles à la maison.
- Informations : nom, quantité, date d’achat, DLC, catégorie (frais, sec…).
- Tri par lieu de stockage (frigo, congélateur, placard).
- Alertes et notifications de péremption.
- Historique des produits consommés ou jetés.

---

### 3. 🍽️ Suggestions de recettes anti-gaspi
- Recettes proposées à partir des aliments restants.
- Filtrage par allergènes, régimes, durée de cuisson.
- Mise en avant des produits proches de la date limite.
- Recettes communautaires + système de notation.

---

### 4. 📅 Planning de repas (Meal Planner)
- Création de menus personnalisés à partir de l’inventaire.
- Génération automatique de liste de courses.
- Possibilité de planifier sur plusieurs jours/semaines.
- Synchronisation avec Google Calendar.

---

### 5. 🛒 Liste de courses intelligente
- Liste générée par le meal planner.
- Suggestions basées sur les habitudes de consommation.
- Scan de code-barres en magasin pour ajout rapide.
- Ajout manuel possible.

---

### 6. 📉 Statistiques & impact environnemental
- Suivi des économies réalisées (€).
- Suivi des kilos de nourriture sauvés.
- Estimation de l'empreinte carbone évitée.
- Graphiques mensuels ou hebdomadaires.
- Système de badges et de gamification.

---

### 7. 🤝 Communauté et dons locaux
- Carte interactive pour donner des produits proches de la DLC à ses voisins.
- Système de mise en relation avec les associations locales.
- Forums ou groupes anti-gaspi par ville/quartier.

---

### 8. 🧠 Intelligence artificielle & personnalisation
- Analyse des habitudes d’achat et de consommation.
- Suggestions personnalisées :
  - Stop à certains achats non consommés
  - Achat en promo basé sur l’historique
- Rappels prédictifs de consommation ou réapprovisionnement.

---

## ✨ Fonctionnalités bonus

- Mode hors-ligne (liste consultable sans connexion).
- Multi-utilisateurs (gestion par colocation, famille).
- Mode “Batch cooking” avec recettes adaptées.
- Défis mensuels : “zéro déchet”, “frigo vide”, etc.
- Export PDF/CSV de l’inventaire ou des statistiques.

---

## 🔧 Stack technique proposée

### Frontend
- **React / Next.js** (Web)
- **React Native / Expo** (Mobile)
- UI framework : Tailwind CSS ou Material UI

### Backend
- **Node.js + Express** ou **Supabase** (backend-as-a-service)
- **Firebase** : Authentification, base de données, cloud functions

### Base de données
- **MongoDB** ou **PostgreSQL** (selon besoin de flexibilité ou relations)

### OCR
- **Tesseract.js** pour l’analyse des tickets de caisse

---

## 📆 Étapes de développement (Roadmap MVP)

1. **Semaine 1–2 :**
   - Authentification utilisateur
   - Création de l’inventaire manuel

2. **Semaine 3–4 :**
   - Intégration OCR + ajout automatique à l’inventaire
   - Système de notifications de péremption

3. **Semaine 5–6 :**
   - Suggestions de recettes
   - Liste de courses intelligente

4. **Semaine 7–8 :**
   - Statistiques basiques
   - Version beta test

---

## 🔐 Sécurité & confidentialité

- Chiffrement des données utilisateur
- Stockage sécurisé (Firebase / Supabase)
- RGPD compliant (effacement de compte, anonymisation…)

---

## 📱 Plateformes ciblées

- **Application mobile (Android/iOS)** – priorité
- **Application web responsive**

---

## 🎯 Objectifs à long terme

- Devenir une référence dans l’anti-gaspi domestique.
- Créer un écosystème autour du zéro déchet.
- Intégration avec des acteurs du secteur (supermarchés, associations, producteurs locaux).

