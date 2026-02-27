const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Web Lecture Vocal démarré sur le port ${PORT}`);
    console.log(`📱 URL: http://localhost:${PORT}`);
    console.log(`👤 Créé par: Sossou Kouamé Appolinaire`);
});
