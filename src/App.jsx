import React, { useState } from 'react';

export default function App() {
  // Data Statis Lokal sesuai instruksi Modul No. 3
  const cuacaData = [
    { id: 1, kota: "Jakarta", suhu: "32°C", kondisi: "Cerah Berawan", ikon: "☀️", kelembaban: "75%", angin: "12 km/h", saran: "Cuaca panas, jangan lupa minum air putih yang cukup ya akhi!" },
    { id: 2, kota: "Bandung", suhu: "23°C", kondisi: "Hujan Ringan", ikon: "🌧️", kelembaban: "85%", angin: "8 km/h", saran: "Sedia payung atau jas hujan sebelum keluar dari asrama." },
    { id: 3, kota: "Sukabumi", suhu: "26°C", kondisi: "Berawan Tebal", ikon: "☁️", kelembaban: "80%", angin: "10 km/h", saran: "Cocok buat murajaah hafalan di dalam ruangan yang adem." },
    { id: 4, kota: "Surabaya", suhu: "34°C", kondisi: "Hujan Petir", ikon: "⛈️", kelembaban: "65%", angin: "15 km/h", saran: "Tetap waspada di jalan dan hindari berteduh di bawah pohon besar." }
  ];

  // State untuk melacak kota mana yang lagi aktif dipilih/diklik oleh user
  const [kotaTerpilih, setKotaTerpilih] = useState(cuacaData[0]);
  const [hoveredId, setHoveredId] = useState(null);

  // --- SIMULASI TATA LETAK TERISOLASI (CSS MODULES STYLE) ---
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '40px auto',
      fontFamily: '"Segoe UI", Tahoma, sans-serif',
      padding: '30px',
      background: '#0b1329',
      color: '#f8fafc',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '35px'
    },
    title: {
      fontSize: '26px',
      margin: '0 0 5px 0',
      color: '#38bdf8',
      fontWeight: '800'
    },
    subtitle: {
      color: '#64748b',
      margin: 0,
      fontSize: '14px'
    },
    dashboardGrid: {
      display: 'flex',
      flexDirection: 'row', 
      gap: '15px',
      overflowX: 'auto', 
      paddingBottom: '20px',
      marginBottom: '30px',
      width: '100%',
      scrollBehavior: 'smooth'
    },
    weatherCard: (id) => ({
      background: kotaTerpilih.id === id 
        ? 'linear-gradient(135deg, #1e293b 0%, #34d399 150%)' 
        : 'linear-gradient(135deg, #1c2541 0%, #0b1329 100%)',
      border: kotaTerpilih.id === id ? '2px solid #34d399' : '1px solid #1e293b',
      borderRadius: '20px',
      padding: '20px',
      width: '160px',
      flexShrink: 0, 
      textAlign: 'center',
      cursor: 'pointer',
      transform: hoveredId === id ? 'translateY(-6px)' : 'translateY(0)',
      boxShadow: kotaTerpilih.id === id ? '0 10px 25px rgba(52, 211, 153, 0.2)' : '0 10px 15px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }),
    detailBox: {
      background: '#1c2541',
      borderRadius: '20px',
      padding: '25px',
      border: '1px solid #3a506b',
      animation: 'fadeIn 0.5s ease'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Header Dashboard */}
      <div style={styles.header}>
        <h1 style={styles.title}>🌤️ Mini Project 3 — Dashboard Cuaca Premium</h1>
        <p style={{ ...styles.subtitle, color: '#64748b' }}>Gaya Terisolasi • Interaktif Klik State • XI HSIBS</p>
      </div>

      {/* Petunjuk Penggunaan */}
      <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '10px', fontWeight: '500' }}>
        👉 Silakan klik/pencet kartu kota untuk melihat detail cuaca spesifik:
      </p>

      {/* NAVIGATION GRID - SEJAJAR HORIZONTAL KE SAMPING */}
      <div style={styles.dashboardGrid}>
        {cuacaData.map((data) => (
          <div 
            key={data.id} 
            style={styles.weatherCard(data.id)}
            onClick={() => setKotaTerpilih(data)}
            onMouseEnter={() => setHoveredId(data.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>{data.ikon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '5px 0', color: '#fff' }}>{data.kota}</h3>
            <div style={{ color: '#38bdf8', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>{data.suhu}</div>
          </div>
        ))}
      </div>

      {/* DETAIL DISPLAY BOX */}
      <div style={styles.detailBox}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #3a506b', paddingBottom: '15px' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#34d399', fontWeight: 'bold', letterSpacing: '1px' }}>SELECTED REGION</span>
            <h2 style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>📍 Cuaca Wilayah {kotaTerpilih.kota}</h2>
          </div>
          <div style={{ fontSize: '48px' }}>{kotaTerpilih.ikon}</div>
        </div>

        {/* Info Grid Indikator */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', textAlign: 'center' }}>
          <div style={{ background: '#0b1329', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>KONDISI</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#f8fafc' }}>{kotaTerpilih.kondisi}</div>
          </div>
          <div style={{ background: '#0b1329', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>KELEMBABAN</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#38bdf8' }}>💧 {kotaTerpilih.kelembaban}</div>
          </div>
          <div style={{ background: '#0b1329', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>KECEPATAN ANGIN</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#fbbf24' }}>💨 {kotaTerpilih.angin}</div>
          </div>
        </div>

        {/* Notifikasi Rekomendasi/Saran Dinamis */}
        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(56, 189, 248, 0.08)', borderRadius: '12px', border: '1px dashed #38bdf8', fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
          <strong>💡 Rekomendasi Harian:</strong> {kotaTerpilih.saran}
        </div>
      </div>

    </div>
  );
}