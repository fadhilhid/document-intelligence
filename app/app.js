(() => {
  const translations = {
    en: {
      workspaceNav: 'WORKSPACE', tenderWorkspace: 'Tender workspace', requirements: 'Requirements', documents: 'Documents',
      language: 'Language', workspaces: 'Workspaces', overview: 'Overview', prototype: 'Prototype', aboutBuild: 'About this build', showSidebar: 'Show sidebar',
      tenderDesk: 'TENDER REVIEW DESK', headline: 'One tender, one clear workspace.', intro: 'Keep the RFP and its annexes together while your team reviews requirements and evidence.', newWorkspace: 'New workspace',
      internalPrototype: 'Internal prototype.', privacyNotice: 'PDFs are stored on this server and converted there. Checklist generation uses the Hermes model configured by the administrator.',
      yourWorkspaces: 'Your workspaces', workspaceSubhead: 'Tender documents, gathered in one place.', recentlyUpdated: 'Recently updated', noWorkspaces: 'No workspaces yet', startWorkspace: 'Start with the tender opportunity your team is reviewing. Keep its RFP and annexes together in one place.', createWorkspace: 'Create a workspace', noDocsSession: 'No tender documents have been added in this session.', footerLine: 'Evidence first. Decisions stay with your team.',
      reviewQueue: 'REVIEW QUEUE', requirementsIntro: 'Candidate items need a source citation and human review before they become commitments.', noChecklist: 'No checklist yet', noChecklistHelp: 'Open a tender workspace, upload its PDFs, then ask Hermes to prepare a sales screening checklist.', goTenderWorkspace: 'Go to tender workspace', draftReview: 'DRAFT FOR HUMAN REVIEW', sourceMaterial: 'SOURCE MATERIAL', documentsIntro: 'Keep each RFP and annex in the tender package it belongs to.', noDocuments: 'No documents yet', noDocumentsHelp: 'Upload tender PDFs to a workspace to see their extraction status here.',
      newPackage: 'NEW PACKAGE', createTenderWorkspace: 'Create a tender workspace', workspaceRule: 'Use one workspace for one tender opportunity and all its related files.', workspaceName: 'Workspace name', required: 'Required', optional: 'Optional', workspacePlaceholder: 'e.g. MASTRAN ITS - RFP', buyerOrg: 'Buyer or organization', buyerPlaceholder: 'Organization name', closingDate: 'Tender closing date', cancel: 'Cancel', closeDialog: 'Close dialog', tenderPackage: 'TENDER PACKAGE', sourceDocuments: 'Source documents', sourceDocumentsHelp: 'Original PDFs are stored on this server; a page-marked Markdown copy is extracted there.', addTenderPdfs: 'Add tender PDFs', dropFiles: 'Choose files or drop them here · PDF · up to 100 MB each', done: 'Done', buildChecklist: 'Build requirement checklist', buildStatus: 'BUILD STATUS', prototypeFeatures: 'What works in this prototype', featureWorkspace: 'Create persistent tender workspaces on this server.', featureUpload: 'Upload PDFs and keep the original files unchanged.', featureExtract: 'Extract page-marked Markdown on the server for Hermes to read.', featureChecklist: 'Generate a sales screening checklist and review its source citations.', prototypeLimit: 'Internal prototype: it has no sign-in. Only expose it inside a trusted, access-controlled network. Scanned pages are flagged for review; OCR and full technical compliance review are not connected.', understood: 'Understood',
      created: 'Created', buyer: 'Buyer', closing: 'Closing', saved: 'Saved', document: 'document', documentsPlural: 'documents', pdf: 'PDF', pdfs: 'PDFs',
      savedServerReady: 'Saved on this server · page-marked Markdown ready', checkOcrNeeded: 'Check/OCR needed', textMissingPages: 'Text missing on PDF pages', savedServer: 'Saved on the server. Page-marked Markdown is ready for Hermes.', textExtracted: 'Text extracted', reviewNeeded: 'Review needed', selectableTextMissing: 'Selectable text missing', visualReview: 'OCR or visual review needed', page: 'page', pages: 'pages', pageMarkdownReady: 'page-marked Markdown ready', openWorkspace: 'Open workspace', tenderWorkspaceLabel: 'TENDER WORKSPACE', pdfAcross: 'PDFs across', tenderWorkspacePlural: 'tender workspaces',
      uploading: 'Uploading and extracting pages on the server…', uploadFailed: 'Upload failed', onlyPdf: 'PDF files only', exceedsLimit: 'exceeds 100 MB', savedConverted: 'Saved and converted.', docsNeedReview: 'document(s) have pages without selectable text; review/OCR is needed.', buildQueued: 'Saving a checklist job. Hermes will read the page-marked Markdown files.', starting: 'Starting…', hermesReviewing: 'Hermes is reviewing…', hermesPreparing: 'Hermes is preparing the sales screening checklist. You can close this panel; the job will continue on the server.', checklistReady: 'Checklist is ready for review.',
      draftChecklist: 'Draft checklist for human review.', savedAs: 'Saved as', inWorkspace: 'in this workspace.', reviewCoverage: 'Review source coverage', needsReview: 'Needs review', priorityAssess: 'Priority not assessed', criticalGroup: 'Critical bid gates', criticalDesc: 'Pass/fail conditions, submission deadlines, or rules that may make a bid non-responsive.', highGroup: 'High evaluation impact', highDesc: 'Scored criteria and material thresholds that affect qualification or award.', standardGroup: 'Other bid requirements', standardDesc: 'Address these requirements; the source does not state a pass/fail or scoring impact.', afterAward: 'After award', afterAwardDesc: 'Contract delivery obligations. These are not bid/no-bid gates.', priorityMissing: 'This saved checklist has no source-grounded priority labels.',
      criticalBadge: 'Critical gate', highBadge: 'High impact', standardBadge: 'Standard', afterAwardBadge: 'After award', whyMatters: 'Why it matters:', evidenceUnspecified: 'Evidence not specified', citationReview: 'Citation needs review', pdfPage: 'PDF p.', noDeadline: 'No deadline stated', notAssessed: 'Not assessed', priorityNotAssessedMessage: 'Priority was not assessed in this saved checklist.', rebuildSeparate: 'Rebuild it to separate disqualification risks, scored criteria, routine requirements, and post-award work.', rebuildPriorities: 'Rebuild with priorities', criticalGates: 'Critical gates', highImpact: 'High impact', otherBidItems: 'Other bid items', noChecklistItems: 'No checklist items were returned. Review the coverage notes or try again.', teamQuestions: 'Questions for the team', prioritySummary: 'Checklist priority summary',
      backendUnavailable: 'DocIntel backend is unavailable', couldNotRemove: 'Could not remove document', couldNotCreate: 'Could not create workspace', pdfOnly: 'PDF files only', fileTooLarge: 'exceeds 100 MB', uploadSaved: 'PDF(s) saved to this server.', pdfsSaved: 'PDF(s) saved', failedToProcess: 'could not be processed.', uploadStatus: 'saved; processing failed', sortNotice: 'Workspaces are shown newest first in this prototype.', atLeastOnePdf: 'Upload at least one PDF before generating a checklist.',
      overviewCrumb: 'Overview', sortWorkspaces: 'Sort workspaces',
      categoryAdministrative: 'Administrative', categoryEligibility: 'Eligibility', categoryQualification: 'Qualification', categoryTechnical: 'Technical', categoryFinancial: 'Financial', categorySchedule: 'Schedule', categoryContract: 'Contract', categoryNeedsReview: 'Needs review', noProjectDocuments: 'No PDFs have been uploaded to this project yet.',
    },
    id: {
      workspaceNav: 'RUANG KERJA', tenderWorkspace: 'Ruang tender', requirements: 'Persyaratan', documents: 'Dokumen',
      language: 'Bahasa', workspaces: 'Ruang kerja', overview: 'Ringkasan', prototype: 'Prototipe', aboutBuild: 'Tentang versi ini', showSidebar: 'Tampilkan sidebar',
      tenderDesk: 'MEJA TINJAUAN TENDER', headline: 'Satu tender, satu ruang kerja yang jelas.', intro: 'Satukan RFP dan lampirannya saat tim meninjau persyaratan dan bukti.', newWorkspace: 'Ruang kerja baru',
      internalPrototype: 'Prototipe internal.', privacyNotice: 'PDF disimpan dan dikonversi di server ini. Pembuatan checklist menggunakan model Hermes yang dikonfigurasi administrator.',
      yourWorkspaces: 'Ruang kerja Anda', workspaceSubhead: 'Dokumen tender terkumpul di satu tempat.', recentlyUpdated: 'Terakhir diperbarui', noWorkspaces: 'Belum ada ruang kerja', startWorkspace: 'Mulai dari tender yang sedang ditinjau tim. Simpan RFP dan lampirannya bersama-sama.', createWorkspace: 'Buat ruang kerja', noDocsSession: 'Belum ada dokumen tender yang ditambahkan.', footerLine: 'Utamakan bukti. Keputusan tetap di tangan tim Anda.',
      reviewQueue: 'ANTREAN TINJAUAN', requirementsIntro: 'Setiap butir perlu kutipan sumber dan tinjauan manusia sebelum menjadi komitmen.', noChecklist: 'Belum ada checklist', noChecklistHelp: 'Buka ruang tender, unggah PDF, lalu minta Hermes menyiapkan checklist penyaringan penjualan.', goTenderWorkspace: 'Buka ruang tender', draftReview: 'DRAF UNTUK DITINJAU', sourceMaterial: 'MATERI SUMBER', documentsIntro: 'Kelompokkan setiap RFP dan lampiran dalam paket tender yang sesuai.', noDocuments: 'Belum ada dokumen', noDocumentsHelp: 'Unggah PDF tender ke ruang kerja untuk melihat status ekstraksinya.',
      newPackage: 'PAKET BARU', createTenderWorkspace: 'Buat ruang tender', workspaceRule: 'Gunakan satu ruang kerja untuk satu peluang tender beserta semua berkasnya.', workspaceName: 'Nama ruang kerja', required: 'Wajib', optional: 'Opsional', workspacePlaceholder: 'mis. MASTRAN ITS - RFP', buyerOrg: 'Instansi atau pembeli', buyerPlaceholder: 'Nama instansi', closingDate: 'Batas akhir tender', cancel: 'Batal', closeDialog: 'Tutup dialog', tenderPackage: 'PAKET TENDER', sourceDocuments: 'Dokumen sumber', sourceDocumentsHelp: 'PDF asli disimpan di server ini dan teks per halaman diekstrak ke Markdown.', addTenderPdfs: 'Tambah PDF tender', dropFiles: 'Pilih atau letakkan file di sini · PDF · maks. 100 MB per file', done: 'Selesai', buildChecklist: 'Buat checklist persyaratan', buildStatus: 'STATUS VERSI', prototypeFeatures: 'Fitur prototipe ini', featureWorkspace: 'Membuat ruang tender yang tersimpan di server ini.', featureUpload: 'Mengunggah PDF tanpa mengubah berkas aslinya.', featureExtract: 'Mengekstrak Markdown per halaman agar dapat dibaca Hermes.', featureChecklist: 'Membuat checklist penyaringan penjualan beserta kutipan sumbernya.', prototypeLimit: 'Prototipe internal tanpa login. Gunakan hanya di jaringan tepercaya yang aksesnya dibatasi. Halaman hasil pindai ditandai untuk ditinjau; OCR dan tinjauan teknis penuh belum tersedia.', understood: 'Mengerti',
      created: 'Dibuat', buyer: 'Pembeli', closing: 'Batas akhir', saved: 'Tersimpan', document: 'dokumen', documentsPlural: 'dokumen', pdf: 'PDF', pdfs: 'PDF',
      savedServerReady: 'Tersimpan di server · Markdown per halaman siap', checkOcrNeeded: 'Perlu diperiksa/OCR', textMissingPages: 'Teks tidak terbaca pada halaman PDF', savedServer: 'Tersimpan di server. Markdown per halaman siap dibaca Hermes.', textExtracted: 'Teks diekstrak', reviewNeeded: 'Perlu ditinjau', selectableTextMissing: 'Teks tidak dapat dipilih', visualReview: 'Perlu OCR atau pemeriksaan visual', page: 'halaman', pages: 'halaman', pageMarkdownReady: 'Markdown per halaman siap', openWorkspace: 'Buka ruang kerja', tenderWorkspaceLabel: 'RUANG TENDER', pdfAcross: 'PDF di', tenderWorkspacePlural: 'ruang tender',
      uploading: 'Mengunggah dan mengekstrak halaman di server…', uploadFailed: 'Gagal mengunggah', onlyPdf: 'Hanya file PDF', exceedsLimit: 'melebihi 100 MB', savedConverted: 'Tersimpan dan dikonversi.', docsNeedReview: 'dokumen memiliki halaman tanpa teks yang dapat dipilih; perlu ditinjau atau OCR.', buildQueued: 'Menyiapkan tugas checklist. Hermes akan membaca file Markdown per halaman.', starting: 'Memulai…', hermesReviewing: 'Hermes sedang meninjau…', hermesPreparing: 'Hermes sedang menyiapkan checklist penyaringan penjualan. Panel ini boleh ditutup; proses berlanjut di server.', checklistReady: 'Checklist siap ditinjau.',
      draftChecklist: 'Draf checklist untuk ditinjau manusia.', savedAs: 'Tersimpan sebagai', inWorkspace: 'di ruang kerja ini.', reviewCoverage: 'Tinjau cakupan sumber', needsReview: 'Perlu ditinjau', priorityAssess: 'Prioritas belum dinilai', criticalGroup: 'Syarat kritis tender', criticalDesc: 'Syarat gugur, tenggat penyerahan, atau aturan yang dapat membuat penawaran tidak responsif.', highGroup: 'Dampak besar pada evaluasi', highDesc: 'Kriteria bernilai dan ambang penting yang memengaruhi kualifikasi atau penetapan pemenang.', standardGroup: 'Persyaratan tender lainnya', standardDesc: 'Tetap dipenuhi; sumber tidak menyatakan dampak gugur atau penilaian.', afterAward: 'Setelah penetapan', afterAwardDesc: 'Kewajiban pelaksanaan kontrak. Ini bukan syarat ikut atau tidak ikut tender.', priorityMissing: 'Checklist tersimpan ini belum memiliki label prioritas berbasis sumber.',
      criticalBadge: 'Syarat kritis', highBadge: 'Dampak besar', standardBadge: 'Standar', afterAwardBadge: 'Setelah penetapan', whyMatters: 'Alasan penting:', evidenceUnspecified: 'Bukti belum disebutkan', citationReview: 'Kutipan perlu ditinjau', pdfPage: 'PDF hlm.', noDeadline: 'Tidak ada tenggat yang disebutkan', notAssessed: 'Belum dinilai', priorityNotAssessedMessage: 'Prioritas belum dinilai pada checklist tersimpan ini.', rebuildSeparate: 'Buat ulang untuk memisahkan risiko gugur, kriteria bernilai, persyaratan rutin, dan pekerjaan setelah penetapan.', rebuildPriorities: 'Buat ulang dengan prioritas', criticalGates: 'Syarat kritis', highImpact: 'Dampak besar', otherBidItems: 'Persyaratan lainnya', noChecklistItems: 'Tidak ada butir checklist. Tinjau catatan cakupan atau coba lagi.', teamQuestions: 'Pertanyaan untuk tim', prioritySummary: 'Ringkasan prioritas checklist',
      backendUnavailable: 'Backend DocIntel tidak tersedia', couldNotRemove: 'Dokumen tidak dapat dihapus', couldNotCreate: 'Ruang kerja tidak dapat dibuat', pdfOnly: 'Hanya file PDF', fileTooLarge: 'melebihi 100 MB', uploadSaved: 'PDF tersimpan di server.', pdfsSaved: 'PDF tersimpan', failedToProcess: 'gagal diproses.', uploadStatus: 'tersimpan; pemrosesan gagal', sortNotice: 'Ruang kerja ditampilkan dari yang terbaru pada prototipe ini.', atLeastOnePdf: 'Unggah setidaknya satu PDF sebelum membuat checklist.',
      overviewCrumb: 'Ringkasan', sortWorkspaces: 'Urutkan ruang kerja',
      categoryAdministrative: 'Administratif', categoryEligibility: 'Kelayakan', categoryQualification: 'Kualifikasi', categoryTechnical: 'Teknis', categoryFinancial: 'Keuangan', categorySchedule: 'Jadwal', categoryContract: 'Kontrak', categoryNeedsReview: 'Perlu ditinjau', noProjectDocuments: 'Belum ada PDF yang diunggah ke project ini.',
    },
  }
  let language = localStorage.getItem('docintel.language') === 'id' ? 'id' : 'en'
  const workspaces = []
  let activeWorkspaceId = null
  let activeView = 'workspace'
  let currentChecklist = null
  let currentChecklistPath = ''
  let toastTimer
  let activeJobId = null
  const byId = (id) => document.getElementById(id)
  const workspaceDialog = byId('workspace-dialog')
  const detailDialog = byId('detail-dialog')
  const aboutDialog = byId('about-dialog')
  const pdfInput = byId('pdf-input')
  const workspaceForm = byId('workspace-form')

  function t(key) { return translations[language][key] || translations.en[key] || key }

  function applyLanguage() {
    document.documentElement.lang = language
    document.title = language === 'id' ? 'DocIntel · Meja tender' : 'DocIntel · Tender desk'
    byId('language-select').value = language
    document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n) })
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => { node.setAttribute('aria-label', t(node.dataset.i18nAria)) })
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder) })
    byId('sidebar').setAttribute('aria-label', language === 'id' ? 'Navigasi utama' : 'Primary navigation')
    byId('brand-home').setAttribute('aria-label', language === 'id' ? 'Beranda DocIntel' : 'DocIntel home')
    byId('crumb-current').textContent = activeView === 'workspace' ? t('overview') : t(activeView === 'checklist' ? 'requirements' : 'documents')
    syncSidebarBehavior()
    renderWorkspaces()
    renderDocuments()
    const workspace = activeWorkspace()
    if (workspace) {
      renderWorkspaceMeta(workspace)
      renderFiles()
    }
    if (currentChecklist) renderChecklist(currentChecklist, currentChecklistPath, false)
  }

  function syncSidebarBehavior() {
    const enabled = window.matchMedia('(hover: hover) and (min-width: 781px)').matches
    document.body.classList.toggle('sidebar-hover-mode', enabled)
    if (!enabled) document.body.classList.remove('sidebar-revealed')
    byId('sidebar-reveal-trigger').setAttribute('aria-label', t('showSidebar'))
  }

  function renderWorkspaceMeta(workspace) {
    byId('detail-meta').innerHTML = [workspace.buyer && `${t('buyer')} · ${safeText(workspace.buyer)}`, workspace.closingDate && `${t('closing')} · ${safeText(workspace.closingDate)}`, `${t('created')} · ${safeText(workspace.createdLabel)}`].filter(Boolean).map((item) => `<span>${item}</span>`).join('')
  }

  async function api(path, options = {}) {
    const response = await fetch(path, options)
    const payload = response.status === 204 ? null : await response.json().catch(() => null)
    if (!response.ok) throw new Error(payload?.detail || `Request failed (${response.status})`)
    return payload
  }

  async function loadWorkspaces() {
    try {
      const saved = await api('/api/v1/workspaces')
      workspaces.splice(0, workspaces.length, ...saved)
      renderWorkspaces()
      renderDocuments()
    } catch (error) {
      showToast(`${t('backendUnavailable')}: ${error.message}`)
    }
  }

  function showToast(message) {
    const toast = byId('toast')
    toast.textContent = message
    toast.classList.add('show')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200)
  }

  function safeText(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
  }

  function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`
    const units = ['KB', 'MB', 'GB']
    let size = bytes / 1024
    let index = 0
    while (size >= 1024 && index < units.length - 1) { size /= 1024; index += 1 }
    return `${size >= 10 ? Math.round(size) : size.toFixed(1)} ${units[index]}`
  }

  function activeWorkspace() {
    return workspaces.find((workspace) => workspace.id === activeWorkspaceId) || null
  }

  function renderWorkspaces() {
    const list = byId('workspace-list')
    const empty = byId('empty-state')
    byId('workspace-count').textContent = String(workspaces.length)
    empty.classList.toggle('hidden', workspaces.length > 0)
    list.innerHTML = workspaces.map((workspace) => `
      <article class="workspace-card" tabindex="0" role="button" data-open="${workspace.id}" aria-label="${safeText(language === 'id' ? 'Buka' : 'Open')} ${safeText(workspace.name)}">
        <span class="folder-icon" aria-hidden="true">▤</span>
        <div class="workspace-info"><strong>${safeText(workspace.name)}</strong><small>${workspace.buyer ? safeText(workspace.buyer) + ' · ' : ''}${t('created')} ${safeText(workspace.createdLabel)}</small></div>
        <div class="workspace-meta"><span>${workspace.files.length} ${workspace.files.length === 1 ? t('document') : t('documentsPlural')}</span><span class="status-pill"><i></i> ${t('saved')}</span></div>
      </article>`).join('')
    list.querySelectorAll('[data-open]').forEach((card) => {
      card.addEventListener('click', () => openWorkspace(card.dataset.open))
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openWorkspace(card.dataset.open) }
      })
    })
  }

  function openWorkspace(id) {
    const workspace = workspaces.find((item) => item.id === id)
    if (!workspace) return
    activeWorkspaceId = id
    byId('detail-title').textContent = workspace.name
    renderWorkspaceMeta(workspace)
    byId('upload-state').textContent = ''
    byId('upload-state').classList.remove('visible')
    if (!activeJobId) byId('processing-message').innerHTML = language === 'id'
      ? '<strong>Berkas tetap di server ini.</strong> PDF disimpan dan teks tiap halaman diekstrak di sini. Tombol “Buat checklist persyaratan” mengirim jalur Markdown hasil ekstraksi ke API Hermes yang dikonfigurasi.'
      : '<strong>Files stay on this server.</strong> Uploading stores each PDF and extracts page text here. Clicking “Build requirement checklist” asks the backend to send the extracted Markdown paths to the configured Hermes API.'
    renderFiles()
    detailDialog.showModal()
  }

  function openWorkspaceDialog() {
    workspaceForm.reset()
    workspaceDialog.showModal()
    byId('workspace-name').focus()
  }

  function renderFiles() {
    const workspace = activeWorkspace()
    if (!workspace) return
    byId('document-count').textContent = String(workspace.files.length)
    byId('file-list').innerHTML = workspace.files.map((file) => {
      const extraction = file.status === 'needs_review'
        ? `${t('textMissingPages')} ${file.pagesWithoutText.join(', ') || (language === 'id' ? 'beberapa halaman' : 'some pages')} · ${t('checkOcrNeeded')}`
        : t('savedServerReady')
      return `<div class="file-row"><span class="pdf-mark" aria-hidden="true">PDF</span><div class="file-copy"><strong title="${safeText(file.name)}">${safeText(file.name)}</strong><small>${formatSize(file.size)} · ${safeText(file.storedName)} · ${safeText(extraction)}</small></div><button class="remove-file" type="button" data-remove="${file.id}" aria-label="${safeText(language === 'id' ? 'Hapus' : 'Remove')} ${safeText(file.name)}">×</button></div>`
    }).join('')
    byId('file-list').querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', async () => {
      button.disabled = true
      try {
        await api(`/api/v1/workspaces/${workspace.id}/documents/${button.dataset.remove}`, { method: 'DELETE' })
        workspace.files = workspace.files.filter((file) => file.id !== button.dataset.remove)
        renderFiles()
        renderWorkspaces()
      } catch (error) {
        showToast(`${t('couldNotRemove')}: ${error.message}`)
        button.disabled = false
      }
    }))
    renderDocuments()
  }

  function renderDocuments() {
    const empty = byId('documents-empty')
    const content = byId('documents-content')
    const entries = workspaces
    const totalFiles = entries.reduce((sum, workspace) => sum + workspace.files.length, 0)
    empty.classList.toggle('hidden', entries.length > 0)
    content.classList.toggle('hidden', entries.length === 0)
    if (!entries.length) return

    byId('documents-overview').textContent = language === 'id'
      ? `${totalFiles} PDF di ${entries.length} project.`
      : `${totalFiles} ${totalFiles === 1 ? 'PDF' : 'PDFs'} across ${entries.length} ${entries.length === 1 ? 'project' : 'projects'}.`
    byId('documents-list').innerHTML = entries.map((workspace) => `
      <section class="workspace-document-group" aria-labelledby="documents-${workspace.id}">
        <header class="workspace-document-heading">
          <div><p class="eyebrow">${t('tenderWorkspaceLabel')}</p><h2 id="documents-${workspace.id}">${safeText(workspace.name)}</h2><small>${workspace.files.length} PDF${workspace.buyer ? ` · ${safeText(workspace.buyer)}` : ''}</small></div>
          <button class="secondary-button" type="button" data-open-workspace="${workspace.id}">${t('openWorkspace')}</button>
        </header>
        ${workspace.files.length ? `<div class="workspace-document-files">${workspace.files.map((file) => {
          const review = file.status === 'needs_review'
          const detail = review
            ? `${t('selectableTextMissing')} · PDF ${language === 'id' ? 'hlm.' : 'pages'} ${file.pagesWithoutText?.join(', ') || (language === 'id' ? 'tidak diketahui' : 'unknown')} · ${t('visualReview')}`
            : `${file.pageCount} ${file.pageCount === 1 ? t('page') : t('pages')} · ${t('pageMarkdownReady')}`
          return `<article class="workspace-document-row"><span class="pdf-mark" aria-hidden="true">PDF</span><div class="file-copy"><strong title="${safeText(file.name)}">${safeText(file.name)}</strong><small>${formatSize(file.size)} · ${safeText(detail)}</small></div><span class="document-extraction ${review ? 'needs-review' : 'ready'}">${review ? t('reviewNeeded') : t('textExtracted')}</span></article>`
        }).join('')}</div>` : `<p class="project-documents-empty">${t('noProjectDocuments')}</p>`}
      </section>`).join('')
    byId('documents-list').querySelectorAll('[data-open-workspace]').forEach((button) => button.addEventListener('click', () => openWorkspace(button.dataset.openWorkspace)))
  }

  async function createWorkspace(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    if (!name) return
    const button = byId('create-button')
    button.disabled = true
    try {
      const workspace = await api('/api/v1/workspaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, buyer: String(data.get('buyer') || '').trim(), closingDate: String(data.get('closingDate') || '') }),
      })
      workspaces.unshift(workspace)
      activeWorkspaceId = workspace.id
      form.reset()
      workspaceDialog.close()
      renderWorkspaces()
      renderDocuments()
      openWorkspace(workspace.id)
    } catch (error) {
      showToast(`${t('couldNotCreate')}: ${error.message}`)
    } finally {
      button.disabled = false
    }
  }

  async function addFiles(files) {
    const workspace = activeWorkspace()
    if (!workspace) return
    const rejected = []
    const accepted = []
    Array.from(files).forEach((file) => {
      const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
      if (!isPdf) { rejected.push(`${file.name}: ${t('pdfOnly')}`); return }
      if (file.size > 100 * 1024 * 1024) { rejected.push(`${file.name}: ${t('fileTooLarge')}`); return }
      accepted.push(file)
    })
    if (rejected.length) showToast(rejected.slice(0, 2).join('. '))
    if (!accepted.length) return
    byId('upload-state').textContent = t('uploading')
    byId('upload-state').classList.add('visible')
    const input = pdfInput
    input.disabled = true
    try {
      const form = new FormData()
      accepted.forEach((file) => form.append('files', file, file.name))
      const result = await api(`/api/v1/workspaces/${workspace.id}/documents`, { method: 'POST', body: form })
      workspace.files = result.workspace.files
      renderFiles()
      renderWorkspaces()
      const needsReview = result.documents.filter((file) => file.status === 'needs_review').length
      const extractionMessage = needsReview
        ? `${t('savedConverted')} ${needsReview} ${language === 'id' ? t('documentsPlural') : `document${needsReview === 1 ? '' : 's'}`} ${t('docsNeedReview')}`
        : t('savedServer')
      const failureMessage = result.errors?.length ? ` ${result.errors.join(' · ')}` : ''
      byId('upload-state').textContent = `${extractionMessage}${failureMessage}`
      showToast(result.errors?.length
        ? `${result.documents.length} PDF ${language === 'id' ? 'tersimpan' : 'saved'}; ${result.errors.length} ${t('failedToProcess')}`
        : `${result.documents.length} PDF ${language === 'id' ? 'tersimpan di server.' : 'saved to this server.'}`)
    } catch (error) {
      byId('upload-state').textContent = `${t('uploadFailed')}: ${error.message}`
      showToast(`${t('uploadFailed')}: ${error.message}`)
    } finally {
      input.disabled = false
    }
  }

  function renderChecklist(checklist, savedPath = '', remember = true) {
    const empty = byId('checklist-empty')
    const content = byId('checklist-content')
    if (!checklist) {
      if (remember) { currentChecklist = null; currentChecklistPath = '' }
      empty.classList.remove('hidden')
      content.classList.add('hidden')
      return
    }
    if (remember) { currentChecklist = checklist; currentChecklistPath = savedPath }
    empty.classList.add('hidden')
    content.classList.remove('hidden')
    byId('checklist-summary').textContent = checklist.summary || t('draftChecklist')
    byId('checklist-path').textContent = savedPath ? `${t('savedAs')} ${savedPath} ${t('inWorkspace')}` : ''
    const gaps = Array.isArray(checklist.coverage_gaps) ? checklist.coverage_gaps : []
    byId('checklist-gaps').innerHTML = gaps.length
      ? `<div class="coverage-warning"><strong>${t('reviewCoverage')}</strong><ul>${gaps.map((gap) => `<li>${safeText(typeof gap === 'string' ? gap : `${gap.document || t('documents')} · ${language === 'id' ? 'hlm.' : 'pages'} ${(gap.pages || []).join(', ')}: ${gap.reason || t('needsReview')}`)}</li>`).join('')}</ul></div>`
      : ''
    const items = Array.isArray(checklist.items) ? checklist.items : []
    const groupDefinitions = [
      { key: 'critical', title: t('criticalGroup'), description: t('criticalDesc') },
      { key: 'high', title: t('highGroup'), description: t('highDesc') },
      { key: 'standard', title: t('standardGroup'), description: t('standardDesc') },
      { key: 'post_award', title: t('afterAward'), description: t('afterAwardDesc') },
      { key: 'unclassified', title: t('priorityAssess'), description: t('priorityMissing') },
    ]
    const validPriorities = new Set(groupDefinitions.map((group) => group.key).filter((key) => key !== 'unclassified'))
    const priorityOf = (item) => item.phase === 'post_award' ? 'post_award' : validPriorities.has(item.priority) ? item.priority : 'unclassified'
    const counts = Object.fromEntries(groupDefinitions.map(({ key }) => [key, items.filter((item) => priorityOf(item) === key).length]))
    const unclassifiedCount = counts.unclassified
    byId('checklist-count').textContent = language === 'id'
      ? `${items.length} butir${unclassifiedCount ? ` · ${unclassifiedCount} perlu dinilai` : ` · ${counts.critical} kritis · ${counts.high} berdampak besar`}`
      : `${items.length} items${unclassifiedCount ? ` · ${unclassifiedCount} need priority review` : ` · ${counts.critical} critical · ${counts.high} high`}`
    byId('checklist-priority-overview').innerHTML = unclassifiedCount
      ? `<div class="priority-legacy-note"><div><strong>${t('priorityNotAssessedMessage')}</strong><p>${t('rebuildSeparate')}</p></div>${activeWorkspaceId ? `<button class="secondary-button" type="button" data-rebuild-checklist>${t('rebuildPriorities')}</button>` : ''}</div>`
      : `<div class="priority-counts" aria-label="${t('prioritySummary')}"><div class="priority-count critical-count"><strong>${counts.critical}</strong><span>${t('criticalGates')}</span></div><div class="priority-count high-count"><strong>${counts.high}</strong><span>${t('highImpact')}</span></div><div class="priority-count standard-count"><strong>${counts.standard}</strong><span>${t('otherBidItems')}</span></div><div class="priority-count post-award-count"><strong>${counts.post_award}</strong><span>${t('afterAward')}</span></div></div>`

    const itemMarkup = (item) => {
      const priority = priorityOf(item)
      const source = item.source || {}
      const pageLabel = Array.isArray(source.pages) && source.pages.length ? `${t('pdfPage')} ${source.pages.join(', ')}` : t('citationReview')
      const citation = [source.document, pageLabel, source.section].filter(Boolean).join(' · ')
      const priorityLabels = { critical: t('criticalBadge'), high: t('highBadge'), standard: t('standardBadge'), post_award: t('afterAwardBadge'), unclassified: t('priorityAssess') }
      const phase = item.phase === 'post_award' ? t('afterAwardBadge') : language === 'id' ? 'Penawaran' : 'Bid'
      const categoryKeys = { administrative: 'categoryAdministrative', eligibility: 'categoryEligibility', qualification: 'categoryQualification', technical: 'categoryTechnical', financial: 'categoryFinancial', schedule: 'categorySchedule', contract: 'categoryContract', 'needs review': 'categoryNeedsReview' }
      const category = categoryKeys[String(item.category || '').toLowerCase()]
      const status = String(item.status || '').toLowerCase() === 'not assessed' ? t('notAssessed') : item.status || t('notAssessed')
      return `<article class="requirement-row"><div class="requirement-topline"><span class="requirement-id">${safeText(item.id)}</span><span class="priority-badge priority-${priority}">${priorityLabels[priority]}</span><span class="requirement-category">${safeText(category ? t(category) : item.category)}</span><span class="requirement-phase">${phase}</span></div><h3>${safeText(item.requirement)}</h3><p>${safeText(item.evidence || t('evidenceUnspecified'))}</p>${item.priority_reason ? `<p class="priority-reason"><strong>${t('whyMatters')}</strong> ${safeText(item.priority_reason)}</p>` : ''}<div class="requirement-footer"><span>${safeText(citation)}</span><span>${safeText(item.deadline || t('noDeadline'))} · ${safeText(status)}</span></div>${item.review_note ? `<p class="requirement-review">${safeText(item.review_note)}</p>` : ''}</article>`
    }
    byId('checklist-items').innerHTML = groupDefinitions.map((group) => {
      const groupItems = items.filter((item) => priorityOf(item) === group.key)
      if (!groupItems.length) return ''
      return `<section class="requirement-group"><header><div><h2>${group.title}</h2><p>${group.description}</p></div><span class="count-chip">${groupItems.length}</span></header><div class="requirement-group-items">${groupItems.map(itemMarkup).join('')}</div></section>`
    }).join('') || `<p class="muted-copy">${t('noChecklistItems')}</p>`
    const rebuildButton = byId('checklist-items').querySelector('[data-rebuild-checklist]') || byId('checklist-priority-overview').querySelector('[data-rebuild-checklist]')
    rebuildButton?.addEventListener('click', () => openWorkspace(activeWorkspaceId))
    const questions = Array.isArray(checklist.questions) ? checklist.questions : []
    byId('checklist-questions').innerHTML = questions.length
      ? `<h3>${t('teamQuestions')}</h3><ul>${questions.map((question) => `<li>${safeText(question)}</li>`).join('')}</ul>`
      : ''
  }

  async function loadLatestChecklist(workspaceId) {
    try {
      const latest = await api(`/api/v1/workspaces/${workspaceId}/checklist/latest`)
      renderChecklist(latest?.checklist, latest?.checklistPath)
    } catch (error) {
      renderChecklist(null)
      showToast(`Could not load checklist: ${error.message}`)
    }
  }

  async function generateChecklist() {
    const workspace = activeWorkspace()
    if (!workspace || !workspace.files.length) {
      showToast(t('atLeastOnePdf'))
      return
    }
    const button = byId('generate-button')
    const note = byId('processing-message')
    button.disabled = true
    button.textContent = t('starting')
    note.textContent = t('buildQueued')
    let jobId
    try {
      const started = await api(`/api/v1/workspaces/${workspace.id}/checklist`, { method: 'POST' })
      jobId = started.jobId
      activeJobId = jobId
      button.textContent = t('hermesReviewing')
      note.textContent = t('hermesPreparing')
      const timeoutAt = Date.now() + 15 * 60 * 1000
      while (Date.now() < timeoutAt && activeJobId === jobId) {
        await new Promise((resolve) => setTimeout(resolve, 2500))
        const job = await api(`/api/v1/jobs/${jobId}`)
        if (job.status === 'completed') {
          renderChecklist(job.checklist, job.checklistPath)
          note.textContent = t('checklistReady')
          detailDialog.close()
          navigate('checklist')
          showToast(`Checklist ready: ${job.checklist?.items?.length || 0} items.`)
          return
        }
        if (job.status === 'failed') throw new Error(job.error || 'Checklist generation failed')
        if (job.status === 'superseded') throw new Error(job.error || 'Workspace documents changed. Start a new checklist.')
      }
      if (Date.now() >= timeoutAt) throw new Error('This job is taking longer than expected. Check again in a moment.')
    } catch (error) {
      note.textContent = `Checklist was not created: ${error.message}`
      showToast(`Checklist failed: ${error.message}`)
    } finally {
      if (!jobId || activeJobId === jobId) {
        activeJobId = null
        button.disabled = false
        button.textContent = t('buildChecklist')
      }
    }
  }

  function navigate(view) {
    const names = { workspace: t('overview'), checklist: t('requirements'), documents: t('documents') }
    activeView = names[view] ? view : 'workspace'
    Object.keys(names).forEach((key) => byId(`view-${key}`).classList.toggle('hidden', key !== view))
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === view))
    byId('crumb-current').textContent = names[view] || 'Overview'
    if (view === 'checklist') {
      if (activeWorkspaceId) loadLatestChecklist(activeWorkspaceId)
      else renderChecklist(null)
    }
    if (view === 'documents') renderDocuments()
  }

  document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.view)))
  document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.go)))
  const sidebar = byId('sidebar')
  const sidebarRevealTrigger = byId('sidebar-reveal-trigger')
  const revealSidebar = () => document.body.classList.add('sidebar-revealed')
  const hideSidebar = () => document.body.classList.remove('sidebar-revealed')
  sidebarRevealTrigger.addEventListener('pointerenter', revealSidebar)
  sidebarRevealTrigger.addEventListener('focus', () => {
    revealSidebar()
    sidebar.querySelector('.nav-item')?.focus()
  })
  sidebar.addEventListener('pointerleave', () => {
    if (!sidebar.contains(document.activeElement)) hideSidebar()
  })
  sidebar.addEventListener('focusout', (event) => {
    if (!sidebar.contains(event.relatedTarget) && event.relatedTarget !== sidebarRevealTrigger) hideSidebar()
  })
  window.matchMedia('(hover: hover) and (min-width: 781px)').addEventListener('change', syncSidebarBehavior)
  byId('language-select').addEventListener('change', (event) => {
    language = event.target.value === 'id' ? 'id' : 'en'
    localStorage.setItem('docintel.language', language)
    applyLanguage()
  })
  byId('new-workspace').addEventListener('click', openWorkspaceDialog)
  byId('empty-create').addEventListener('click', openWorkspaceDialog)
  byId('workspace-close').addEventListener('click', () => workspaceDialog.close('cancel'))
  byId('workspace-cancel').addEventListener('click', () => workspaceDialog.close('cancel'))
  workspaceForm.addEventListener('submit', createWorkspace)
  workspaceDialog.addEventListener('close', () => workspaceForm.reset())
  byId('dismiss-notice').addEventListener('click', () => byId('build-notice').remove())
  byId('about-button').addEventListener('click', () => aboutDialog.showModal())
  byId('about-close').addEventListener('click', () => aboutDialog.close())
  byId('about-done').addEventListener('click', () => aboutDialog.close())
  byId('detail-close').addEventListener('click', () => detailDialog.close())
  byId('detail-done').addEventListener('click', () => detailDialog.close())
  byId('generate-button').addEventListener('click', generateChecklist)
  byId('sort-button').addEventListener('click', () => showToast(t('sortNotice')))
  pdfInput.addEventListener('change', (event) => { addFiles(event.target.files); event.target.value = '' })
  const dropZone = byId('drop-zone')
  dropZone.addEventListener('dragover', (event) => { event.preventDefault(); dropZone.classList.add('dragging') })
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragging'))
  dropZone.addEventListener('drop', (event) => { event.preventDefault(); dropZone.classList.remove('dragging'); addFiles(event.dataTransfer.files) })
  dropZone.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); pdfInput.click() } })

  ;[workspaceDialog, detailDialog, aboutDialog].forEach((dialog) => dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect()
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
    if (outside) dialog.close()
  }))
  byId('upload-state').classList.remove('visible')
  syncSidebarBehavior()
  applyLanguage()
  loadWorkspaces()
})()
