'use client'

import { useState } from 'react'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  experience: string
  description: string
  tags: string[]
  applyUrl: string
}

const jobListings: Job[] = [
  {
    id: 1,
    title: 'Warehouse Stocker',
    company: 'REMA 1000',
    location: 'Oslo',
    salary: '320,000 - 380,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Join our team as a warehouse stocker. Responsibilities include receiving goods, organizing inventory, and maintaining warehouse cleanliness. Physical fitness required.',
    tags: ['Retail', 'Inventory', 'Physical Work'],
    applyUrl: 'https://www.rema.no/karriere'
  },
  {
    id: 2,
    title: 'Stock Manager',
    company: 'IKEA Norway',
    location: 'Bergen',
    salary: '420,000 - 480,000 NOK/year',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Lead our stock management team. Oversee inventory processes, train new staff, and ensure efficient warehouse operations. Management experience preferred.',
    tags: ['Management', 'Leadership', 'Logistics'],
    applyUrl: 'https://www.ikea.com/no/en/this-is-ikea/jobs/'
  },
  {
    id: 3,
    title: 'Inventory Specialist',
    company: 'Coop Norge',
    location: 'Trondheim',
    salary: '340,000 - 400,000 NOK/year',
    type: 'Full-time',
    experience: '1+ year',
    description: 'Manage inventory systems, conduct stock counts, and ensure accurate records. Experience with inventory software preferred.',
    tags: ['Inventory', 'Technology', 'Retail'],
    applyUrl: 'https://coop.no/karriere/'
  },
  {
    id: 4,
    title: 'Night Shift Stocker',
    company: 'MENY',
    location: 'Stavanger',
    salary: '360,000 - 420,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Night shift position restocking shelves and preparing store for next day. Includes shift differential pay. Must be available for evening/night hours.',
    tags: ['Night Shift', 'Retail', 'Flexible Hours'],
    applyUrl: 'https://meny.no/jobb'
  },
  {
    id: 5,
    title: 'Cold Storage Stocker',
    company: 'Nortura',
    location: 'Lillehammer',
    salary: '350,000 - 410,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Work in cold storage environments handling frozen and refrigerated goods. Special clothing provided. Physical stamina required.',
    tags: ['Cold Storage', 'Food Industry', 'Physical Work'],
    applyUrl: 'https://www.nortura.no/jobb'
  },
  {
    id: 6,
    title: 'Warehouse Associate',
    company: 'Elkjøp Nordic',
    location: 'Drammen',
    salary: '330,000 - 390,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Handle electronics inventory, prepare orders for shipping, and maintain organized storage areas. Forklift certification is a plus.',
    tags: ['Electronics', 'Logistics', 'Warehouse'],
    applyUrl: 'https://www.elkjop.no/karriere'
  },
  {
    id: 7,
    title: 'Distribution Center Stocker',
    company: 'PostNord',
    location: 'Kristiansand',
    salary: '340,000 - 400,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Sort and stock packages in our distribution center. Fast-paced environment with opportunities for advancement.',
    tags: ['Logistics', 'Distribution', 'Fast-Paced'],
    applyUrl: 'https://www.postnord.no/karriere'
  },
  {
    id: 8,
    title: 'Part-Time Stocker',
    company: 'Kiwi',
    location: 'Tromsø',
    salary: '200 - 230 NOK/hour',
    type: 'Part-time',
    experience: 'Entry Level',
    description: 'Flexible part-time position ideal for students. Stock shelves, rotate products, and assist with inventory management.',
    tags: ['Part-time', 'Student Friendly', 'Flexible'],
    applyUrl: 'https://kiwi.no/jobb/'
  },
  {
    id: 9,
    title: 'Forklift Operator/Stocker',
    company: 'Asko',
    location: 'Oslo',
    salary: '380,000 - 450,000 NOK/year',
    type: 'Full-time',
    experience: '1+ year',
    description: 'Operate forklifts and manage warehouse inventory. Valid forklift certification required. Competitive salary with benefits.',
    tags: ['Forklift', 'Certified', 'Warehouse'],
    applyUrl: 'https://www.asko.no/karriere'
  },
  {
    id: 10,
    title: 'Fresh Foods Stocker',
    company: 'Bunnpris',
    location: 'Ålesund',
    salary: '320,000 - 370,000 NOK/year',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Handle fresh produce, dairy, and bakery items. Maintain quality standards and ensure proper rotation of perishable goods.',
    tags: ['Fresh Foods', 'Retail', 'Quality Control'],
    applyUrl: 'https://bunnpris.no/jobb'
  },
  {
    id: 11,
    title: 'Logistics Coordinator',
    company: 'Bring Cargo',
    location: 'Bergen',
    salary: '400,000 - 470,000 NOK/year',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Coordinate warehouse operations and inventory flow. Experience in logistics and good communication skills required.',
    tags: ['Logistics', 'Coordination', 'Management'],
    applyUrl: 'https://www.bring.no/jobb'
  },
  {
    id: 12,
    title: 'Weekend Stocker',
    company: 'OBS Bygg',
    location: 'Fredrikstad',
    salary: '220 - 250 NOK/hour',
    type: 'Part-time',
    experience: 'Entry Level',
    description: 'Weekend position at building supplies store. Heavy lifting involved. Great for supplemental income.',
    tags: ['Weekend', 'Building Supplies', 'Part-time'],
    applyUrl: 'https://www.obs-bygg.no/jobb'
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = locationFilter === '' ||
                           job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesType = activeFilter === 'all' || job.type.toLowerCase() === activeFilter.toLowerCase()

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="container">
      <div className="header">
        <h1>🇳🇴 Stocker Jobs in Norway</h1>
        <p>Find your next warehouse and inventory position</p>
      </div>

      <div className="search-section">
        <div className="search-form">
          <input
            type="text"
            placeholder="Search jobs, companies..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location (e.g., Oslo)"
            className="search-input"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>

        <div className="filters">
          <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Jobs
          </button>
          <button
            className={`filter-button ${activeFilter === 'full-time' ? 'active' : ''}`}
            onClick={() => setActiveFilter('full-time')}
          >
            Full-time
          </button>
          <button
            className={`filter-button ${activeFilter === 'part-time' ? 'active' : ''}`}
            onClick={() => setActiveFilter('part-time')}
          >
            Part-time
          </button>
        </div>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.title}</h2>
              <div className="company">{job.company}</div>
              <div className="location">📍 {job.location}</div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span className="detail-label">Salary</span>
                <span className="detail-value">{job.salary}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Type</span>
                <span className="detail-value">{job.type}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Experience</span>
                <span className="detail-value">{job.experience}</span>
              </div>
            </div>

            <div className="tags">
              {job.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <p className="job-description">{job.description}</p>

            <button
              className="apply-button"
              onClick={() => window.open(job.applyUrl, '_blank')}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="resources">
        <h2>📚 Helpful Resources</h2>
        <div className="resource-links">
          <a href="https://www.nav.no/en/home" target="_blank" rel="noopener noreferrer" className="resource-link">
            NAV - Norwegian Labour & Welfare
          </a>
          <a href="https://www.finn.no/job/fulltime/search.html" target="_blank" rel="noopener noreferrer" className="resource-link">
            Finn.no - Job Board
          </a>
          <a href="https://www.udi.no/en/" target="_blank" rel="noopener noreferrer" className="resource-link">
            UDI - Norwegian Immigration
          </a>
          <a href="https://www.karriere.no/" target="_blank" rel="noopener noreferrer" className="resource-link">
            Karriere.no - Career Site
          </a>
          <a href="https://arbeidsplassen.nav.no/" target="_blank" rel="noopener noreferrer" className="resource-link">
            Arbeidsplassen - NAV Job Portal
          </a>
          <a href="https://www.linkedin.com/jobs/search/?location=Norway" target="_blank" rel="noopener noreferrer" className="resource-link">
            LinkedIn Jobs Norway
          </a>
        </div>
      </div>
    </div>
  )
}
