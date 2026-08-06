export const getDirectBookPdfUrl = (book) => {
  if (!book) return "#";
  if (book.url) {
    if (book.url.startsWith("file://")) {
      return `http://localhost:5000/api/local-file?path=${encodeURIComponent(book.url)}`;
    }
    return book.url;
  }

  const title = (book.title || "").toLowerCase();
  const author = (book.author || "").toLowerCase();

  // 1. C Programming
  if (title.includes("programming in ansi c") || author.includes("balagurusamy")) {
    return "https://bcrti.co.in/digitallibrary/includeFolder/noticeFolder/21092102293562.pdf";
  }
  if (title.includes("the c programming language") || author.includes("kernighan") || author.includes("ritchie")) {
    return "https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf";
  }
  if (title.includes("let us c") || (author.includes("kanetkar") && title.includes("let us"))) {
    return "https://pdvpmtasgaon.edu.in/uploads/dptcomputer/Let%20us%20c%20-%20yashwantkanetkar.pdf";
  }
  if (title.includes("programming in c") || author.includes("kochan")) {
    return "http://karadev.net/uroci/filespdf/files/Kochan%20-%20ProgramminginC.pdf";
  }
  if (title.includes("pointers in c") || (author.includes("kanetkar") && title.includes("pointers"))) {
    return "https://archive.org/details/understandingpoi0000kane";
  }
  if (title.includes("data structures using c") || author.includes("thareja")) {
    return "https://sagarmittal1.github.io/3-DSA/assets/books/Data%20structures%20using%20C%20-%20Reema%20Thareja.pdf";
  }
  if (title.includes("how to solve it by computer") || author.includes("dromey")) {
    return "https://mrajacse.wordpress.com/wp-content/uploads/2012/08/how-to-solve-it-by-computer-r-g-dromey-for-unit-1.pdf";
  }
  if (title.includes("data structures and algorithm analysis in c") || author.includes("mark allen weiss")) {
    return "https://mrajacse.wordpress.com/wp-content/uploads/2012/08/data-structures-and-algorithm-analysis-in-c-mark-allen-weiss.pdf";
  }

  // 2. Cloud Computing
  if (title.includes("cloud computing: concepts") || author.includes("thomas erl")) {
    return "https://www.scribd.com/document/1028145981/Cloud-Computing-Concepts-Technology-Security-and-Architecture-Second-Edition-Thomas-Erl-full-chapters-free#google_vignette";
  }
  if (title.includes("cloud architecture patterns") || author.includes("wilder")) {
    return "https://speakerdeck.com/xctk/cloud-architecture-patterns";
  }
  if (title.includes("hybrid cloud for dummies") || author.includes("hurwitz")) {
    return "https://www.decisionsystems.com/wp-content/uploads/2016/06/Hybrid-Cloud-for-Dummies-IBM-edition.pdf";
  }
  if (title.includes("cloud computing: principles and paradigms") || author.includes("buyya")) {
    return "https://docs.google.com/file/d/0BysscwnZT7zZWVg1NHhidjNRcGM/edit?resourcekey=0-AQJPuVkqbenqgZR1n_eoJA";
  }
  if (title.includes("docker deep dive") || author.includes("poulton")) {
    return "https://ebooks.karbust.me/Technology/Docker%20Deep%20Dive%20-%20Nigel%20Poulton.pdf";
  }
  if (title.includes("storage area network essentials") || author.includes("barker")) {
    return "https://archive.org/details/storageareanetwo0000bark";
  }
  if (title.includes("cloud security and privacy") || author.includes("mather")) {
    return "https://csestudymate.wordpress.com/wp-content/uploads/2019/02/book1-cct-cloud-security-and-privacyunit-5-1.pdf";
  }
  if (title.includes("cloud computing: a practical approach") || author.includes("velte")) {
    return "https://it.dru.ac.th/o-bookcs/pdfs/69.pdf";
  }
  if (title.includes("cloud strategy") || author.includes("hohpe")) {
    return "https://cdn.bookey.app/files/pdf/book/en/cloud-strategy.pdf";
  }
  if (title.includes("designing distributed systems") || author.includes("brendan burns")) {
    return "https://info.microsoft.com/rs/157-GQE-382/images/EN-CNTNT-eBook-DesigningDistributedSystems.pdf";
  }
  if (title.includes("serverless architectures on aws") || author.includes("sbarski")) {
    return "https://www.scribd.com/document/1013544615/Serverless-Architectures-on-AWS-2nd-Edition-Peter-Sbarski-eBook-complete-archive";
  }
  if (title.includes("terraform: up & running") || author.includes("brikman")) {
    return "https://digtvbg.com/files/LINUX/Brikman%20Y.%20Terraform.%20Up%20and%20Running.%20Writing...as%20Code%203ed%202022.pdf";
  }
  if (title.includes("cloud computing security & virtualization") || title.includes("term paper")) {
    return "https://www.scribd.com/document/884576003/RK21BTB48-Term-paper-CSE423-term-paper-roll-no-48";
  }
  if (title.includes("aws system & cloud architecture guide") || title.includes("aws system")) {
    return "https://dynamicsystemindia.in/pdfs/pdfs/aws.pdf";
  }

  // 3. Computer Networks, Security & Crypto
  if (title.includes("wireless communications & networks") || (author.includes("stallings") && title.includes("wireless"))) {
    return "https://elcom-team.com/Subjects/%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D9%83%D9%8A%D8%A9/%D8%A7%D9%84%D9%83%D8%AA%D8%AA%D8%A8%20%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84/Wireless_Communications_%26_Networking_Stallings_2nd.pdf";
  }
  if (title.includes("mobile communications") || author.includes("jochen schiller") || author.includes("schiller")) {
    return "https://archive.org/details/mobilecommunicat0000schi";
  }
  if (title.includes("digital communications") || author.includes("proakis")) {
    return "https://arnabiitk.wordpress.com/wp-content/uploads/2013/02/proakis-digital-communications-4th-ed.pdf";
  }
  if (title.includes("wireless & cellular telecommunications") || author.includes("c. y. lee") || (author.includes("lee") && title.includes("cellular"))) {
    return "https://paragarora15.wordpress.com/wp-content/uploads/2008/09/wireless-and-cellular-communication_william_lee.pdf";
  }
  if (title.includes("wireless communications") && author.includes("goldsmith")) {
    return "https://web.stanford.edu/class/ee359/doc/WirelessComm_Chp1-16_March32020.pdf";
  }
  if (title.includes("5g nr: the next generation") || author.includes("dahlman")) {
    return "https://www.scribd.com/document/897019268/5G-NR-the-Next-Generation-Wireless-Access-Technology";
  }
  if (title.includes("lte - the umts long term evolution") || author.includes("sesia")) {
    return "https://dl.icdst.org/pdfs/files/060ab2bbf9dbe18f5618e66fc41506f8.pdf";
  }
  if (title.includes("sdn and nfv simplified") || author.includes("doherty")) {
    return "https://ptgmedia.pearsoncmg.com/images/9780134306407/samplepages/9780134306407.pdf";
  }
  if (title.includes("wireless network architecture") || author.includes("bohnert")) {
    return "https://www.scribd.com/document/1013446465/WiredWireless-Internet-Communications-1st-edition-by-Evgeny-Osipov-Andreas-Kassler-Thomas-Michael-Bohnert-Xavier-Masip-Bruin-ISBN-3642133152-978364";
  }
  if (title.includes("cwna certified wireless network administrator") || author.includes("coleman")) {
    return "https://www.slideshare.net/slideshow/cwna-certified-wireless-network-administrator-pdfdrive-pdf/253841305";
  }
  if (title.includes("networking fundamentals") || author.includes("krishnamurthy")) {
    return "https://pws.npru.ac.th/sartthong/data/files/Networking_Fundamentals__Wide__Local_and_Personal_Area_Communications.pdf";
  }
  if (title.includes("data and computer communications") || (author.includes("stallings") && title.includes("data and computer"))) {
    return "https://ftp.utcluj.ro/pub/users/dadarlat/retele_an3/stuff/Data.And.Computer.Communications.8e.WilliamStallings.pdf";
  }
  if (title.includes("mobile networking through mobile ip") || (author.includes("perkins") && title.includes("mobile ip"))) {
    return "https://www.cse.sc.edu/~srihari/reflib/PerkinsIIC98.pdf";
  }
  if (title.includes("tcp/ip illustrated, volume 1") || (author.includes("stevens") && title.includes("tcp/ip illustrated"))) {
    return "http://www.r-5.org/files/books/computers/internals/net/Richard_Stevens-TCP-IP_Illustrated-EN.pdf";
  }
  if (title.includes("ad hoc mobile wireless networks") || author.includes("siva ram murthy")) {
    return "https://books.google.co.in/books?id=U-yLb-9nXyYC&printsec=frontcover#v=onepage&q&f=false";
  }
  if (title.includes("mobile ad hoc networking") || author.includes("basagni")) {
    return "http://kto.tam.free.fr/M/020/Mobile%20Ad%20Hoc%20Networking%20-%20John%20Wiley%20&%20Sons%20-%20IEEE%20Press/Mobile%20Ad%20Hoc%20Networking%20-%20John%20Wiley%20&%20Sons%20-%20IEEE%20Press.pdf";
  }
  if (title.includes("protocols and architectures for wireless sensor networks") || author.includes("holger karl") || author.includes("karl")) {
    return "https://onlinelibrary.wiley.com/doi/book/10.1002/0470095121";
  }
  if (title.includes("wireless sensor networks") || author.includes("akyildiz")) {
    return "https://mrajacse.wordpress.com/wp-content/uploads/2014/09/wireless-sensor-networks.pdf";
  }
  if (title.includes("internet of things: principles and paradigms") || (author.includes("buyya") && title.includes("internet of things"))) {
    return "https://dhoto.lecturer.pens.ac.id/lecture_notes/internet_of_things/Internet%20of%20Things%20Principles%20and%20Paradigms.pdf";
  }
  if (title.includes("lora - lorawan") || author.includes("sylvain robert")) {
    return "https://www.univ-smb.fr/lorawan/wp-content/uploads/2022/01/Book-LoRa-LoRaWAN-and-Internet-of-Things.pdf";
  }
  if (title.includes("advances in computing and network communications") || author.includes("sabu m. thampi") || author.includes("thampi")) {
    return "https://soclibrary.futa.edu.ng/books/Advances%20in%20Computing%20and%20Network%20Communications%20by%20Sabu%20M.%20Thampi.pdf";
  }
  if (title.includes("high performance browser networking") || author.includes("ilya grigorik") || author.includes("grigorik")) {
    return "https://github.com/varunkashyapks/Books/blob/master/High-Performance-Browser-Networking-Ilya-Grigorik.pdf";
  }
  if (title.includes("wireless security: models, threats") || author.includes("nichols") || author.includes("lekkas")) {
    return "https://dokumen.pub/wireless-security-models-threats-and-solutions-9780071399432-0-07-139943-7-0-07-138038-8.html";
  }
  if (title.includes("5g security") || author.includes("niemi") || author.includes("nyberg")) {
    return "https://www.slideshare.net/slideshow/4g-and-5g-network-security-techniques-and-algorithmspdf/252668240";
  }
  if (title.includes("an overview of the global lead on qos/qoe") || author.includes("takahashi")) {
    return "https://www.itu.int/en/ITU-D/Regional-Presence/Europe/Documents/Events/2016/Broadband%20Mapping/6.%20Bilel%20%20SG12%20overview%20warsaw.pdf";
  }
  if (title.includes("6g wireless communications and mobile networking") || (author.includes("wu") && title.includes("6g"))) {
    return "https://www.sciencedirect.com/book/9780128247044/6g-wireless-communications-and-mobile-networking";
  }
  if (title.includes("artificial intelligence for 6g wireless networks") || (author.includes("poor") && title.includes("6g"))) {
    return "https://www.wiley.com/en-us/Artificial+Intelligence+for+6G+Wireless+Networks-p-9781119864271";
  }
  if (title.includes("ns-3 network simulator manual") || title.includes("ns-3")) {
    return "https://www.nsnam.org/tutorials/NS-3-LABMEETING-1.pdf";
  }
  if (title.includes("practical packet analysis") || author.includes("chris sanders") || author.includes("sanders")) {
    return "https://repository.root-me.org/R%C3%A9seau/EN%20-%20Practical%20packet%20analysis%20-%20Wireshark.pdf";
  }

  if (title.includes("cryptography and network security") || author.includes("stallings")) {
    return "https://www.uoitc.edu.iq/images/documents/informatics-institute/Competitive_exam/Cryptography_and_Network_Security.pdf";
  }
  if (title.includes("understanding cryptography") || author.includes("paar") || author.includes("pelzl")) {
    return "https://gnanavelrec.wordpress.com/wp-content/uploads/2019/06/2.understanding-cryptography-by-christof-paar-.pdf";
  }
  if (title.includes("network security, firewalls, and vpns") || author.includes("michael stewart")) {
    return "https://books.google.mu/books?id=qZgtAAAAQBAJ&lpg=PR2&pg=PR2#v=onepage&q&f=false";
  }
  if (title.includes("808.11 wireless networks") || author.includes("matthew s. gast")) {
    return "https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Wireless/808.11%20%20Wireless%20Networks-%20The%20Definitive%20Guide%202002.pdf";
  }
  if (title.includes("web application hacker's handbook") || author.includes("stuttard") || author.includes("pinto")) {
    return "https://digtvbg.com/files/books-for-hacking/The%20Web%20Application%20Hacker%27s%20Handbook%20-%20Finding%20and%20Exploiting%20Security%20Flaws%2C%202nd%20Edition%20by%20Dafydd%20Stuttard%2C%20Marcus%20Pinto.pdf";
  }
  if (title.includes("alice and bob learn application security") || author.includes("tanya janca")) {
    return "https://onlinelibrary.wiley.com/doi/book/10.1002/9781394277179";
  }
  if (title.includes("basics of hacking and penetration testing") || author.includes("engebretson")) {
    return "https://elhacker.info/manuales/PenTesting/The%20Basics%20of%20Hacking%20and%20Penetration%20Testing.pdf";
  }
  if (title.includes("mastering blockchain") || author.includes("imran bashir")) {
    return "https://users.cs.fiu.edu/~prabakar/cen5079/Common/textbooks/Mastering_Blockchain_2nd_Edition.pdf";
  }
  if (title.includes("zero trust networks") || author.includes("gilman") || author.includes("barth")) {
    return "https://soclibrary.futa.edu.ng/books/Zero%20trust%20networks%20%20building%20secure%20systems%20in%20untrusted%20networks%20by%20Barth,%20Doug%20Gilman,%20Evan%20(z-lib.org).pdf";
  }

  if (title.includes("packet tracer network simulator") || author.includes("jesin")) {
    return "https://dl.icdst.org/pdfs/files4/1f20b86666b47c9a07ea0173a82d01d6.pdf";
  }
  if (title.includes("tcp/ip network administration") || author.includes("craig hunt")) {
    return "http://www.nylxs.com/docs/tcp_ip_networkadministration_3rdedition.pdf";
  }
  if (title.includes("unix network programming") || author.includes("richard stevens")) {
    return "https://putregai.org/books/unix_netprog_v1.pdf";
  }
  if (title.includes("data communications and networking") || author.includes("forouzan")) {
    return "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/Data-Communications-and-Network-5e.pdf";
  }
  if (title.includes("ccna 200-301 official cert guide") || author.includes("wendell odom")) {
    return "https://www.bvuniversity.edu.in/Uploads/moduleimg/12381imguf_CiscoPress-CCNA-200-301-Official-Cert-Guide-Volume-1.pdf";
  }
  if (title.includes("wireshark network analysis") || author.includes("laura chappell")) {
    return "https://elhacker.info/manuales/Redes/wireshark-network-analysis-second-edition.pdf";
  }
  if (title.includes("dns and bind") || author.includes("cricket liu")) {
    return "https://www.kufunda.net/publicdocs/dnsAndBind5thEdition.pdf";
  }
  if (title.includes("python network programming cookbook") || author.includes("faruque sarker")) {
    return "http://zenhadi.lecturer.pens.ac.id/kuliah/WorkshopPemrogramanJaringan/Kathiravelu%20P.,%20Sarker%20F.%20-%20Python%20Network%20Programming%20Cookbook,%20Second%20Edition%20-%202017.pdf";
  }
  if (title.includes("computer networks") && (author.includes("tanenbaum") || title.includes("tanenbaum"))) {
    return "https://networking.harshkapadia.me/files/books/computer-networks-tanenbaum-5th-edition.pdf";
  }
  if (title.includes("computer networking: a top-down approach") || author.includes("kurose") || author.includes("ross")) {
    return "https://www.cs.sjtu.edu.cn/~linghe.kong/CS339/Download/ComputerNetworking.pdf";
  }
  if (title.includes("wireless communications & networks") || (author.includes("stallings") && title.includes("wireless"))) {
    return "https://books.google.co.in/books/about/Wireless_Communications_and_Networking.html?id=kwQfAQAAIAAJ&redir_esc=y";
  }
  if (title.includes("wireless communications: principles and practice") || author.includes("rappaport")) {
    return "https://telkom2013.wordpress.com/wp-content/uploads/2014/02/wireless-comm-princip-n-practice-theodoresrappaport.pdf";
  }
  if (title.includes("network management: principles and practice") || author.includes("subramanian")) {
    return "https://taufikcool.wordpress.com/wp-content/uploads/2015/11/network-management-principles-and-practices-2nd-edition.pdf";
  }
  if (title.includes("sdn: software defined networks") || author.includes("nadeau") || author.includes("ken gray")) {
    return "https://ridhanegara.staff.telkomuniversity.ac.id/files/2017/04/Thomas-D.-Nadeau-Ken-Gray-SDN-Software-Defined-Networks-O_039_Reilly-Media-2013.pdf";
  }

  // 4. Computer Organization & Architecture
  if (title.includes("computer organization and architecture") || author.includes("stallings")) {
    return "https://os.ecci.ucr.ac.cr/ci0114/material/Stallings/Computer-Organization-Architecture-11th.pdf";
  }
  if (title.includes("digital design") || author.includes("mano")) {
    return "https://www.mpgcamb.com/wp-content/uploads/2024/12/M.-Morris-Mano-Digital-Design-Prentice-Hall-1995.pdf";
  }
  if (title.includes("computer organization") && (author.includes("hamacher") || title.includes("hamacher"))) {
    return "https://theswissbay.ch/pdf/Gentoomen%20Library/Computer%20Architecture/Computer_Organization_5th_Edition.pdf";
  }
  if (title.includes("computer architecture: a quantitative approach") || author.includes("hennessy") || author.includes("patterson")) {
    return "https://acs.pub.ro/~cpop/SMPA/Computer%20Architecture%20A%20Quantitative%20Approach%20(5th%20edition).pdf";
  }
  if (title.includes("advanced computer architecture") || author.includes("kai hwang") || author.includes("rewini") || author.includes("abd-el-barr") || author.includes("hesham")) {
    return "https://theswissbay.ch/pdf/Gentoomen%20Library/Computer%20Architecture/Advanced%20Computer%20Architecture%20and%20Parallel%20Processing.pdf";
  }
  if (title.includes("arm cortex-m3") || author.includes("joseph yiu")) {
    return "https://wiki.ifsc.edu.br/mediawiki/images/2/29/MIPM3TUG.pdf";
  }

  // 5. Corporate Communication & Industry Readiness
  if (title.includes("mindset: the new psychology of success") || author.includes("dweck")) {
    return "https://www.proemergency.com/assets/dokumen/ebook_platinum/20231124092918-Mindset_The_New_Psychology_of_Success.pdf";
  }
  if (title.includes("corporate communication") || author.includes("argenti")) {
    return "https://www.slideshare.net/slideshow/corporate-communication-8th-edition-paul-a-argenti/280847645";
  }
  if (title.includes("business communication today") || author.includes("bovee")) {
    return "https://archive.org/details/businesscommunic0000bove";
  }
  if (title.includes("talk like ted") || author.includes("carmine gallo")) {
    return "https://www.academia.edu/41377425/Talk_Like_TED_Carmine_Gallo_";
  }
  if (title.includes("definitive book of body language") || author.includes("allan pease")) {
    return "https://e-edu.nbu.bg/pluginfile.php/331752/mod_resource/content/0/Allan_and_Barbara_Pease_-_Body_Language_The_Definitive_Book.pdf";
  }
  if (title.includes("hbr guide to better business writing") || author.includes("garner")) {
    return "https://archive.org/details/hbrguidetobetter0000garn";
  }
  if (title.includes("model business letters") || author.includes("shirley taylor")) {
    return "https://archive.org/details/modelbusinesslet0000tayl";
  }
  if (title.includes("google resume") || (author.includes("mcdowell") && title.includes("google"))) {
    return "https://archive.org/details/googleresumehowt0000mcdo";
  }
  if (title.includes("tech resume inside out") || author.includes("gergely orosz")) {
    return "https://www.scribd.com/document/877178917/The-Tech-Resume-Inside-Out-PDF#google_vignette";
  }
  if (title.includes("cracking the coding interview") || author.includes("mcdowell")) {
    return "https://repo.darmajaya.ac.id/4188/1/Cracking%20the%20Coding%20Interview_%20189%20Programming%20Questions%20and%20Solutions%20%28%20PDFDrive%20%29.pdf";
  }
  if (title.includes("crucial conversations") || author.includes("patterson")) {
    return "https://trans4mind.com/download-pdfs/Crucial%20Conversations.pdf";
  }
  if (title.includes("presentation zen") || author.includes("reynolds")) {
    return "https://archive.org/details/presentationzens0002reyn";
  }
  if (title.includes("essentials of business etiquette") || author.includes("pachter")) {
    return "https://insights.si/wp-content/uploads/hunt-chaney-l.-i-st.-clair-martin-j.-2007.-the-essential-guide-to-business-etiquette.pdf";
  }
  if (title.includes("technical writing process") || author.includes("kieran morgan")) {
    return "https://www.scribd.com/document/831027703/Technical-Writing-Process-the-Simple-Five-step-Guide-That-Anyone-Can-Use-to-Create-Technical-Documents-Such-as-User-Guides-Kieran-Morgan-Z-Lib";
  }
  if (title.includes("emotional intelligence 2.0") || author.includes("bradberry")) {
    return "https://www.bigmentor.org/wp-content/uploads/2023/10/EmotionalIntelligence.pdf";
  }
  if (title.includes("digital body language") || author.includes("dhawan")) {
    return "https://ericadhawan.com/wp-content/uploads/2021/07/Digital-Body-Language-Free-Downloads.pdf";
  }
  if (title.includes("knock 'em dead") || author.includes("yate")) {
    return "https://archive.org/details/knockemdead2016u0000yate";
  }
  if (title.includes("getting to yes") || author.includes("fisher") || author.includes("ury")) {
    return "https://www.rhetoricinstitute.edu.gr/wp-content/uploads/2017/09/fisher-getting-to-yes.pdf";
  }
  if (title.includes("leaders eat last") || author.includes("sinek")) {
    return "https://icrrd.com/public/media/16-05-2021-042803Leaders-Eat-Last-Simon-Sinek.pdf";
  }
  if (title.includes("five dysfunctions of a team") || author.includes("lencioni")) {
    return "https://static.sched.com/hosted_files/pa2023/8f/The%20Five%20Dysfunctions%20of%20a%20Team%20%281%29.pdf";
  }
  if (title.includes("radical candor") || author.includes("kim scott")) {
    return "https://idleguy.com/library/Radical_Candor_-_Kim_Scott.pdf";
  }
  if (title.includes("the mckinsey way") || author.includes("rasiel")) {
    return "https://www.scribd.com/document/918565124/The-McKinsey-Way-PDF";
  }
  if (title.includes("think like a freak") || author.includes("levitt") || author.includes("dubner")) {
    return "https://sarojkm.wordpress.com/wp-content/uploads/2020/03/think-like-a-freak-steven-d.-levitt-stephen-j.-_10492.pdf";
  }
  if (title.includes("inspired: how to create tech products") || author.includes("cagan")) {
    return "https://www.scribd.com/document/809309857/My-Review-INSPIRED-Marty-Cagan";
  }
  if (title.includes("what the ceo wants you to know") || author.includes("ram charan")) {
    return "https://www.scribd.com/document/992158351/What-the-Ceo-Wants-You-to-Know-PDF";
  }
  if (title.includes("never split the difference") || author.includes("voss")) {
    return "http://livre2.com/LIVREE/E1/E001005.pdf";
  }
  if (title.includes("deep work") || author.includes("newport")) {
    return "https://cpcglobal.org/publications/Deep%20Work.pdf";
  }
  if (title.includes("art of invisibility") || author.includes("mitnick")) {
    return "https://digtvbg.com/files/books-for-hacking/Kevin%20Mitnic/The%20Art%20of%20Invisibility%20-%20The%20World%27s%20Most%20Famous%20Hacker%20Teaches%20You%20How%20to%20Be%20Safe%20in%20the%20Age%20of%20Big%20Brother%20and%20Big%20Data%20by%20Kevin%20Mitnick.pdf";
  }
  if (title.includes("fearless salary negotiation") || author.includes("josh doody")) {
    return "https://www.scribd.com/document/852129374/Fearless-Salary-Negotiation-Z-Library";
  }
  if (title.includes("leading change") || author.includes("kotter")) {
    return "https://sektor-api.argos.uz/media/20.LEADING_CHANGE_si7IDRA.pdf";
  }
  if (title.includes("the phoenix project") || author.includes("gene kim")) {
    return "https://github.com/RavinRau/Ebooks/blob/main/Devops/The%20Phoenix%20Project%20A%20Novel%20About%20IT,%20DevOps,%20and%20Helping%20Your%20Business%20Win%20%28Gene%20Kim,%20Kevin%20%20Behr,%20George%20Spafford%29.pdf";
  }

  // 6. Data Structures & Algorithms
  if (title.includes("introduction to algorithms") || author.includes("cormen") || author.includes("clrs")) {
    return "https://www.cs.mcgill.ca/~akroit/math/compsci/Cormen%20Introduction%20to%20Algorithms.pdf";
  }
  if (title.includes("data structures and algorithms in python") || author.includes("goodrich")) {
    return "https://nibmehub.com/opac-service/pdf/read/Data%20Structures%20and%20Algorithms%20in%20Python.pdf";
  }
  if (title.includes("algorithm design") || author.includes("kleinberg") || author.includes("tardos")) {
    return "https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithm%20Design%20-%20John%20Kleinberg%20-%20%C3%89va%20Tardos.pdf";
  }
  if (title.includes("data structures and algorithms made easy") || author.includes("karumanchi")) {
    return "https://dpvipracollege.in/wp-content/uploads/2023/01/Data-Structures-and-Algorithms-Narasimha-Karumanchi.pdf";
  }
  if (title.includes("data structures and algorithms in c") && !title.includes("c++") && author.includes("weiss")) {
    return "https://mrajacse.wordpress.com/wp-content/uploads/2012/08/data-structures-and-algorithm-analysis-in-c-mark-allen-weiss.pdf";
  }
  if (title.includes("data structures and algorithms in c++") || author.includes("drozdek")) {
    return "https://ramshasohail.wordpress.com/wp-content/uploads/2019/11/data-structure-and-algorithms-in-c-2nd-ed-adam-drozdek.pdf";
  }
  if (title.includes("competitive programmer's handbook") || author.includes("laaksonen")) {
    return "https://cses.fi/book/book.pdf";
  }

  // 7. Database Systems & Database Lab
  if (title.includes("database system concepts") || author.includes("silberschatz") || author.includes("korth") || author.includes("sudarshan")) {
    return "https://www.mpgcamb.com/wp-content/uploads/2024/12/Abraham-Silberschatz-Henry-F.-Korth-S.-Sudarshan-Database-System-Concepts-McGraw-Hill-Education-2019.pdf";
  }
  if (title.includes("fundamentals of database systems") || author.includes("elmasri") || author.includes("navathe")) {
    return "https://asolanki.co.in/wp-content/uploads/2019/02/Fundamentals_of_Database_Systems_6th_Edition-1.pdf";
  }
  if (title.includes("sql in 10 minutes") || author.includes("ben forta")) {
    return "https://uodiyala.edu.iq/uploads/PDF%20ELIBRARY%20UODIYALA/EL77%20computers/Sams_Teach_Yourself_Microsoft_Sql_Server_T-Sql_In_10_Minutes_(2008).pdf";
  }
  if (title.includes("sql queries for mere mortals") || author.includes("viescas")) {
    return "https://www.bytecaffeine.com/acc/java/ee/frags/SQLQMM.pdf";
  }
  if (title.includes("nosql distilled") || author.includes("sadalage") || author.includes("fowler")) {
    return "https://www.bigdata.ir/wp-content/uploads/2016/08/6C594096C6E33AE41A6D365F2C4588C6.pdf";
  }
  if (title.includes("database systems: design, implementation") || author.includes("coronel")) {
    return "https://ebooks.karbust.me/Technology/Database%20Systems%20-%20Design,%20Implementation,%20and%20Management%20(9th%20Edition).pdf";
  }
  if (title.includes("murach's mysql") || author.includes("murach")) {
    return "https://archive.org/details/murachsmysql0000mura_v8w6";
  }
  if (title.includes("java database programming with jdbc") || author.includes("george reese")) {
    return "https://gowthamivuppala.wordpress.com/wp-content/uploads/2013/04/oreilly-database-programming-with-jdbc-and-java-2nd.pdf";
  }
  if (title.includes("database systems: a practical approach") || author.includes("connolly")) {
    return "https://dpvipracollege.ac.in/wp-content/uploads/2023/01/Database_Systems_4th_Edition_Thomas_M_Connolly_Carolyn_E_Beggwww.ebook-dl.com_.pdf";
  }
  if (title.includes("mongodb: the definitive guide") || author.includes("bradshaw") || author.includes("chodorow")) {
    return "https://www.slideshare.net/slideshow/mongodb-the-definitive-guide-3rd-edition-3rd-edition-kristina-chodorow-eoin-brazil-shannon-bradshaw/280355293";
  }

  // 8. Design Thinking
  if (title.includes("change by design") || author.includes("tim brown")) {
    return "http://hozekf.oerp.ir/sites/hozekf.oerp.ir/files/kar_fanavari/manabe%20book/Thinking/Change%20by%20Design_%20How%20Design%20Thinking%20Transforms%20Organizations%20and%20Inspires%20Innovation%20.pdf";
  }
  if (title.includes("design of everyday things") || author.includes("don norman")) {
    return "https://dl.icdst.org/pdfs/files4/4bb8d08a9b309df7d86e62ec4056ceef.pdf";
  }
  if (title.includes("design thinking: understanding how designers think") || author.includes("nigel cross")) {
    return "https://books.google.co.in/books?id=F4SUVT1XCCwC&lpg=PA1&pg=PA1#v=onepage&q&f=false";
  }
  if (title.includes("interviewing users") || author.includes("portigal")) {
    return "https://magnetise.pl/wp-content/uploads/2013/05/5152013_steve_portigal__interviewing_users.pdf";
  }
  if (title.includes("frame innovation") || author.includes("dorst")) {
    return "https://www.scribd.com/doc/285811805/Frame-Innovation";
  }
  if (title.includes("six thinking hats") || author.includes("de bono")) {
    return "https://cpcglobal.org/publications/EBooks/Edward%20De%20Bono%20-%20Six%20Thinking%20Hats-Little%20Brown%20and%20Company%20(1985).pdf";
  }
  if (title.includes("prototyping: a practitioner's guide") || author.includes("warfel")) {
    return "https://cdn.bookey.app/files/pdf/book/en/prototyping.pdf";
  }
  if (title.includes("rocket surgery made easy") || author.includes("steve krug")) {
    return "https://books.google.com.na/books?id=9Q3OQVyX_-QC&lpg=PP1&num=20&pg=PP1#v=onepage&q&f=false";
  }
  if (title.includes("design, when everybody designs") || author.includes("manzini")) {
    return "https://dokumen.pub/design-when-everybody-designs-an-introduction-to-design-for-social-innovation-9780262028608-0262028603.html";
  }
  if (title.includes("business model generation") || author.includes("osterwalder")) {
    return "https://mymyeo.com/wp-content/uploads/2022/12/Business-model-generation-_-a-handbook-for-visionaries-game-changers-and-challengers-PDFDrive-1.pdf";
  }
  if (title.includes("small is beautiful") || author.includes("schumacher")) {
    return "https://www.daastol.com/books/Schumacher%20(1973)%20Small%20is%20Beautiful.pdf";
  }
  if (title.includes("cradle to cradle") || author.includes("mcdonough") || author.includes("braungart")) {
    return "https://cushman.host.dartmouth.edu/courses/engs44/Cradle-to-Cradle-Chapter1.pdf";
  }
  if (title.includes("universal methods of design") || author.includes("bella martin")) {
    return "https://archive.org/details/universalmethods0000mart";
  }
  if (title.includes("infinite vision") || author.includes("mehta")) {
    return "https://books.google.co.in/books?id=ohJorB7piPMC&printsec=frontcover#v=onepage&q&f=false";
  }
  if (title.includes("designing your life") || author.includes("burnett") || author.includes("dave evans")) {
    return "https://www.scribd.com/document/898937787/Designing-Your-Life";
  }
  if (title.includes("range: why generalists triumph") || title.includes("range") || author.includes("epstein")) {
    return "https://dokumen.pub/range-why-generalists-triumph-in-a-specialized-world-9780735214491-0735214492.html";
  }
  if (title.includes("social entrepreneur's playbook") || author.includes("macmillan") || author.includes("thompson")) {
    return "https://dhjhkxawhe8q4.cloudfront.net/penn-university-press/wp-content/uploads/2023/12/04095255/The-Social-Entrepreneurs-Playbook-Online-Learning-Edition-2017WSP.pdf";
  }

  // 9. Discrete Mathematics
  if (title.includes("discrete mathematics and its applications") || (author.includes("rosen") && title.includes("discrete"))) {
    return "https://cis.temple.edu/~latecki/Courses/CIS2166-Fall25/RosenDiscreteMath8Ed.pdf";
  }
  if (title.includes("how to prove it") || author.includes("velleman")) {
    return "https://users.metu.edu.tr/serge/courses/111-2011/textbook-math111.pdf";
  }
  if (title.includes("discrete mathematics") && author.includes("liu")) {
    return "https://www.scribd.com/document/545723717/Elements-of-Discrete-Mathematics-Liu-C-L";
  }
  if (title.includes("introductory combinatorics") || author.includes("brualdi")) {
    return "https://newsite.kashanu.ac.ir/Files/IntroductoryCombinatorics.pdf";
  }
  if (title.includes("introduction to graph theory") || author.includes("douglas b. west") || author.includes("west")) {
    return "https://daiwz.net/course/disc_math/2023/West_Intro_Graph_Theory_en.pdf";
  }
  if (title.includes("digital logic and computer design")) {
    return "https://www.mpgcamb.com/wp-content/uploads/2024/12/M.-Morris-Mano-Digital-Design-Prentice-Hall-1995.pdf";
  }
  if (title.includes("abstract algebra") || author.includes("dummit") || author.includes("foote")) {
    return "https://rksmvv.ac.in/wp-content/uploads/2021/04/David_S_Dummit_Richard_M_Foote_Abstract_Algeb_230928_225848.pdf";
  }
  if (title.includes("introduction to the theory of computation") || author.includes("sipser")) {
    return "https://cs.brown.edu/courses/csci1810/fall-2023/resources/ch2_readings/Sipser_Introduction.to.the.Theory.of.Computation.3E.pdf";
  }

  // 10. Embedded Systems & IoT
  if (title.includes("introduction to embedded systems") || author.includes("shibu")) {
    return "https://www.scribd.com/document/558164990/Introduction-to-Embedded-Systems-by-Shibu-K-V";
  }
  if (title.includes("8051 microcontroller") || author.includes("mazidi")) {
    return "https://www.cecmohali.org/public/documents/ece/material/ebook/The_8051_Microcontroller_and_Embedded_Sy%20(1).pdf";
  }
  if (title.includes("making embedded systems") || author.includes("elecia white")) {
    return "https://homel.vsb.cz/~sta048/mcu/doc/book/making_embedded_systems.pdf";
  }
  if (title.includes("embedded c") || author.includes("michael j. pont")) {
    return "http://www.ecpe.nu.ac.th/ponpisut/22323006-Embedded-c-Tutorial-8051.pdf";
  }
  if (title.includes("sensors and transducers") || author.includes("patranabis") || author.includes("sinclair")) {
    return "https://senofficial.yolasite.com/resources/sensors%20and%20transducers.pdf";
  }
  if (title.includes("serial port complete") || author.includes("axelson")) {
    return "https://www.8051projects.net/files/public/1347193247_22104_FT57363_serial-port-complete-com-ports-usb-virtual-com-ports-and-ports-for-embedded-systems-complete-guides-series.9781931448062.31506.pdf";
  }
  if (title.includes("mastering the freertos") || author.includes("richard barry")) {
    return "https://www.freertos.org/media/2018/161204_Mastering_the_FreeRTOS_Real_Time_Kernel-A_Hands-On_Tutorial_Guide.pdf";
  }
  if (title.includes("internet of things: a hands-on approach") || author.includes("bahga") || author.includes("madisetti")) {
    return "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/Internet-of-things-a-hands-on-approach-%20Arshadeep.pdf";
  }
  if (title.includes("programming esp8266") || author.includes("neil cameron")) {
    return "https://myarduino.dk/Projects_with%20_the%20ESP8266_and_ESP32.pdf";
  }
  if (title.includes("mqtt essentials") || author.includes("hillar")) {
    return "https://www.slideshare.net/slideshow/mqtt-essentials-a-lightweight-iot-protocol-gaston-hillar/279868060";
  }
  if (title.includes("abusing the internet of things") || (author.includes("dhanjani") && title.includes("abusing"))) {
    return "https://www.softouch.on.ca/kb/data/Abusing%20The%20Internet%20of%20Things.pdf";
  }
  if (title.includes("tinyml") || author.includes("pete warden") || author.includes("situnayake")) {
    return "https://tinymlbook.com/wp-content/uploads/2020/01/tflite_micro_preview.pdf";
  }
  if (title.includes("industrial internet of things") || author.includes("jeschke")) {
    return "https://aitskadapa.ac.in/e-books/AI&DS/IOT/Industrial%20Internet%20of%20Things_%20Cybermanufacturing%20Systems%20(%20PDFDrive%20).pdf";
  }
  if (title.includes("debugging embedded microprocessor systems") || author.includes("stuart ball")) {
    return "https://www.perlego.com/book/1810321/debugging-embedded-microprocessor-systems-pdf";
  }
  if (title.includes("iot projects with esp32") || author.includes("kurniawan")) {
    return "https://books.google.co.in/books?id=v86PDwAAQBAJ&lpg=PP1&pg=PP1#v=onepage&q&f=false";
  }

  // 11. Engineering Chemistry
  if (title.includes("engineering chemistry") || author.includes("jain & jain") || author.includes("jain and jain")) {
    return "https://aitskadapa.ac.in/img/pdf/HM23%20I%20-II/Engg.Chemistry.pdf";
  }
  if (title.includes("concise inorganic chemistry") || author.includes("j.d. lee") || author.includes("jd lee")) {
    return "https://jesusconsultancy.com/wp-content/uploads/2022/02/Lee-JD-Concise-inorganic-Chemistry_lee-5ed.pdf_18-2-2022.pdf";
  }
  if (title.includes("modern electrochemistry") || author.includes("bockris") || author.includes("reddy")) {
    return "https://ceramrtr.ceramika.agh.edu.pl/~szyszkin/eis/Modern%20Electrochemistry%20Vol%202B%20Electrodics%20in%20Chemistry,%20Engineering.pdf";
  }
  if (title.includes("fuels and combustion") || author.includes("samir sarkar")) {
    return "https://www.scribd.com/document/637344389/Fuels-and-Combustion-Samir-Sarkar";
  }
  if (title.includes("textbook of polymer science") || author.includes("billmeyer")) {
    return "https://cryssmat.fq.edu.uy/ricardo/libro.pdf";
  }
  if (title.includes("physical chemistry") || author.includes("atkins")) {
    return "https://nowgonggirlscollege.co.in/attendence/classnotes/files/1621583343.pdf";
  }
  if (title.includes("environmental chemistry") || (author.includes("de") && title.includes("environmental"))) {
    return "https://www.scribd.com/document/820304588/Environmental-Chemistry-book-by-AK-De";
  }
  if (title.includes("instrumental methods of analysis") || author.includes("willard")) {
    return "https://dokumen.pub/instrumental-methods-of-analysis-7e-seventh.html";
  }

  // 12. Engineering Exploration
  if (title.includes("studying engineering") || author.includes("landis")) {
    return "https://archive.org/details/studyingengineer0000land";
  }
  if (title.includes("introduction to engineering") && author.includes("wright")) {
    return "https://www.slideshare.net/slideshow/introduction-to-engineering-3rd-ed-paul-h-wright/279865131";
  }
  if (title.includes("engineering design: a systematic approach") || author.includes("pahl") || author.includes("beitz")) {
    return "https://www.scribd.com/document/334155534/G-Pahl-W-Beitz-Engineering-Design-A-Systematic-Approach-Springer-1977#google_vignette";
  }
  if (title.includes("the innovator's dilemma") || author.includes("christensen")) {
    return "https://cpcglobal.org/publications/The%20Innovators%20Dilemma.pdf";
  }
  if (title.includes("advanced engineering mathematics") || author.includes("kreyszig")) {
    return "http://www.uop.edu.pk/ocontents/AdvancedEngineeringMathematics.pdf";
  }
  if (title.includes("engineering simulation with matlab") || (author.includes("karris") && title.includes("simulation"))) {
    return "https://pce-fet.com/common/library/books/19/886_[Steven_T._Karris]_Signals_and_systems_with_MATLA.pdf";
  }
  if (title.includes("pmbok") || title.includes("project management body of knowledge") || author.includes("pmi")) {
    return "https://tegnum.edu.pe/wp-content/uploads/2023/09/Project-Management-Institute-A-Guide-to-the-Project-Management-Body-of-Knowledge-PMBOK-R-Guide-PMBOK%C2%AE%EF%B8%8F-Guide-Project-Management-Institute-2021.pdf";
  }
  if (title.includes("technical communication") || author.includes("meenakshi raman")) {
    return "https://career-shiksha.com/wp-content/uploads/2024/06/Technical-Communication-Principles-and-Practice-Oxford-University-Press-2015.pdf";
  }
  if (title.includes("sustainable engineering") || author.includes("allen") || author.includes("shonnard")) {
    return "https://www.scribd.com/document/450640219/ALLEN-Sustainable-Engineering-Concepts-Design-And-Case-Studies";
  }
  if (title.includes("the lean startup") || author.includes("eric ries")) {
    return "https://ia800509.us.archive.org/7/items/TheLeanStartupErickRies/The%20Lean%20Startup%20-%20Erick%20Ries.pdf";
  }
  if (title.includes("the fourth industrial revolution") || author.includes("schwab")) {
    return "https://law.unimelb.edu.au/__data/assets/pdf_file/0005/3385454/Schwab-The_Fourth_Industrial_Revolution_Klaus_S.pdf";
  }
  if (title.includes("emotional intelligence") || author.includes("goleman")) {
    return "https://donainfo.wordpress.com/wp-content/uploads/2017/09/emotional-intelligence-daniel-goleman.pdf";
  }
  if (title.includes("7 habits of highly effective people") || author.includes("covey")) {
    return "https://icrrd.com/public/media/01-11-2020-212827The%207%20Habits%20of%20Highly%20Effective%20People.pdf";
  }
  if (title.includes("to engineer is human") || author.includes("petroski")) {
    return "https://archive.org/details/toengineerishuma0000petr";
  }
  if (title.includes("engineering design") && (author.includes("dym") || author.includes("little") || author.includes("orwin"))) {
    return "https://seess.ca/wp-content/uploads/2025/03/SEE111Textbook.pdf";
  }
  if (title.includes("unwritten laws of engineering") || author.includes("skakoon")) {
    return "https://rotorlab.tamu.edu/me489/README/2010%20ASME%20Unwritten_Laws_of_Enginering.pdf";
  }

  // 13. Engineering Mechanics
  if (title.includes("engineering mechanics: statics and dynamics") || (author.includes("hibbeler") && title.includes("statics and dynamics"))) {
    return "https://civilittee.com/storage/images/files/file_1712351875qg0nd.pdf";
  }
  if (title.includes("engineering mechanics") && (author.includes("timoshenko") || author.includes("young"))) {
    return "https://www.scribd.com/document/897497034/Engineering-Mechanics-Timoshenko";
  }
  if (title.includes("vector mechanics for engineers: statics") || (author.includes("beer") && title.includes("vector"))) {
    return "https://gcsetime.com/vector-mechanics-for-engineers-statics-by-ferdinand-p-beer-e-russell-johnston-jr-david-f-mazurek/#google_vignette";
  }
  if (title.includes("engineering mechanics: statics") && author.includes("hibbeler")) {
    return "https://gessknust.wordpress.com/wp-content/uploads/2015/09/engineering-mechanics-statics-r-c-hibbeler-12th-edition.pdf";
  }
  if (title.includes("mechanics of materials") && author.includes("beer")) {
    return "https://dl.icdst.org/pdfs/files3/2da7c6222d8d17ac4fbb8f36a401dda2.pdf";
  }
  if (title.includes("engineering mechanics: dynamics") && author.includes("hibbeler")) {
    return "https://www.scribd.com/document/1003559538/Rc-Hibbeler-Dynamics-14th-Ed";
  }
  if (title.includes("mechanical vibrations") || author.includes("s.s. rao")) {
    return "https://www.scribd.com/document/399893658/Mechanical-Vibration-by-S-S-Rao-pdf";
  }
  if (title.includes("2500 solved problems in fluid mechanics") || author.includes("evett")) {
    return "https://www.scribd.com/document/462315401/2500-Solved-Problems-in-Fluid-Mechanics-and-Hydraulics-Jack-Evett-and-Cheng-Liu";
  }

  // 14. Engineering Physics
  if (title.includes("error analysis") || author.includes("john r. taylor") || (author.includes("taylor") && title.includes("error"))) {
    return "https://archive.org/details/introductiontoer00tayl";
  }
  if (title.includes("electricity and magnetism") || author.includes("purcell") || author.includes("morin")) {
    return "file:///C:/Users/DELL/Downloads/Purcell%20E.M.,%20Morin%20D.J.-Electricity%20and%20Magnetism-Cambridge%20University%20Press%20(2013)%20(1).pdf";
  }
  if (title.includes("engineering physics") && (author.includes("malik") || author.includes("singh"))) {
    return "https://www.scribd.com/document/615765706/Engineering-Physics-HK-Malik";
  }
  if (title.includes("concepts of physics") || author.includes("verma")) {
    return "https://tripathistudyzone.weebly.com/uploads/5/2/6/4/52646781/concepts_of_physics_by_h.c._verma_volume_1.pdf";
  }
  if (title.includes("physics for scientists and engineers") || author.includes("serway")) {
    return "https://salmanisaleh.wordpress.com/wp-content/uploads/2019/02/physics-for-scientists-7th-ed.pdf";
  }
  if (title.includes("physics of waves and oscillations") || author.includes("bajaj")) {
    return "https://www.scribd.com/document/710425787/NK-Bajaj-The-Physics-of-Waves-and-Oscillation-free-download";
  }
  if (title.includes("optics") && author.includes("ghatak")) {
    return "https://mpcsirnetphysics.wordpress.com/wp-content/uploads/2021/10/ajoy-ghatak-optics.pdf";
  }
  if (title.includes("textbook of optics") || title.includes("optics & lasers") || author.includes("subrahmanyam") || author.includes("brij lal")) {
    return "https://dokumen.pub/a-textbook-of-optics-for-bsc-classes-as-per-ugc-model-syllabus-23nbsped-8121926114-9788121926119.html";
  }
  if (title.includes("fiber optic") || author.includes("palais")) {
    return "https://archive.org/details/fiberopticcommun0002pala";
  }
  if (title.includes("introduction to electrodynamics") || (author.includes("griffiths") && title.includes("electrodynamics"))) {
    return "https://nucleares.unam.mx/~martinel/griffiths_4ed.pdf";
  }
  if (title.includes("solid state electronic devices") || author.includes("streetman") || author.includes("banerjee")) {
    return "https://rrsdce.wordpress.com/wp-content/uploads/2018/07/sspd-eee-swapnil.pdf";
  }
  if (title.includes("semiconductor physics and devices") || author.includes("neamen")) {
    return "https://www.optima.ufam.edu.br/SemPhys/Downloads/Neamen.pdf";
  }
  if (title.includes("concepts of modern physics") || author.includes("beiser")) {
    return "http://debracollege.dspaces.org/bitstream/123456789/565/1/Concepts%20of%20Modern%20Physics%20by%20Arthur%20Beiser%20.pdf";
  }
  if (title.includes("quantum mechanics") && author.includes("griffiths")) {
    return "https://www.fisica.net/mecanica-quantica/Griffiths%20-%20Introduction%20to%20quantum%20mechanics.pdf";
  }
  if (title.includes("solid state physics") || author.includes("pillai")) {
    return "https://www.scribd.com/document/882009376/S-O-Pillai-Solid-State-Physics-2005-New-Age-International-P-Ltd";
  }
  if (title.includes("introduction to nanotechnology") || author.includes("poole") || author.includes("owens")) {
    return "https://www.scribd.com/document/252143489/Introduction-to-Nanotechnology-Poole-Owens";
  }
  if (title.includes("renewable energy: physics, engineering") || author.includes("sørensen") || author.includes("sorensen")) {
    return "https://books.google.com.om/books?id=-YCUYn0eL5sC&printsec=frontcover&hl=ar&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false";
  }
  if (title.includes("electromagnetic waves and radiating systems") || author.includes("jordan") || author.includes("balmain")) {
    return "https://dn790002.ca.archive.org/0/items/ewand-rs-2nd/EWandRS_2nd.pdf";
  }
  if (title.includes("quantum computation and quantum information") || author.includes("nielsen") || author.includes("chuang")) {
    return "https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf";
  }
  if (title.includes("nanomaterials and nanotechnology") || author.includes("p.k. sharma") || author.includes("gorai") || author.includes("soma")) {
    return "https://archive.org/details/nanomaterialsnan0000shar";
  }

  // 15. Exploratory Data Analysis
  if (title.includes("exploratory data analysis") || author.includes("tukey")) {
    return "https://archive.org/details/exploratorydataa0000tuke_7616";
  }
  if (title.includes("web scraping with python") || author.includes("ryan mitchell")) {
    return "https://edu.anarcho-copy.org/Programming%20Languages/Python/Web%20Scraping%20with%20Python,%202nd%20Edition.pdf";
  }
  if (title.includes("data cleaning") || author.includes("ihab") || author.includes("chu xu")) {
    return "https://chu-data-lab.github.io/downloads/data-cleaning-book-chapter.pdf";
  }
  if (title.includes("practical statistics for data scientists") || author.includes("bruce")) {
    return "https://lexicodoportugues.com/projetos/pee/referencias/Bruce,%20Bruce%20-%202017%20-%20Practical%20Statistics%20for%20Data%20Scientists.pdf";
  }
  if (title.includes("statistics") && author.includes("witte")) {
    return "https://nibmehub.com/opac-service/pdf/read/Statistics%20by%20Robert%20S.%20Witte-%20John%20S.%20Witte.pdf";
  }
  if (title.includes("fundamentals of data visualization") || author.includes("wilke")) {
    return "https://www.bhumipublishing.com/wp-content/uploads/2025/04/Fundamentals-of-Data-Handling-and-Visualization.pdf";
  }
  if (title.includes("applied multivariate statistical analysis") || author.includes("wichern")) {
    return "https://vuquangnguyen2016.wordpress.com/wp-content/uploads/2018/03/applied-predictive-modeling-max-kuhn-kjell-johnson_1518.pdf";
  }
  if (title.includes("feature engineering and selection") || (author.includes("kuhn") && title.includes("selection"))) {
    return "https://www.slideshare.net/slideshow/feature-engineering-and-selection-a-practical-approach-for-predictive-models-1st-edition-max-kuhn/277176387";
  }
  if (title.includes("sql for data analysis") || author.includes("tanimura")) {
    return "https://www.scribd.com/document/642674200/SQL-for-data-analysis#google_vignette";
  }
  if (title.includes("python data science handbook") || author.includes("vanderplas")) {
    return "https://cappinno.com/ortak-panel/dosyalar/20250622115953Python_Datascience.pdf";
  }
  if (title.includes("data science for business") || author.includes("provost") || author.includes("fawcett")) {
    return "https://books.google.co.in/books?id=4ZctAAAAQBAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false";
  }
  if (title.includes("interpretable machine learning") || author.includes("molnar")) {
    return "https://originalstatic.aminer.cn/misc/pdf/Molnar-interpretable-machine-learning_compressed.pdf";
  }
  if (title.includes("data analysis with open source tools") || author.includes("janert")) {
    return "http://www.apptivismo.org/taller-visualizacion-de-datos/descargas/libros/Data_Analysis_with_Open_Source_Tools.pdf";
  }
  if (title.includes("ethics and data science") || author.includes("loukides") || author.includes("dj patil")) {
    return "https://books.google.co.in/books/about/Ethics_and_Data_Science.html?id=UXHKDwAAQBAJ&redir_esc=y";
  }

  // 16. Linear Algebra
  if (title.includes("introduction to linear algebra") || (author.includes("strang") && title.includes("linear algebra"))) {
    return "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/linear-algebra-author-gilbert-strang.pdf";
  }
  if (title.includes("linear algebra and its applications") || author.includes("david c. lay") || author.includes("lay")) {
    return "https://broman.dev/download/Linear%20Algebra%20and%20its%20Applications%205th%20Edition.pdf";
  }
  if (title.includes("elementary linear algebra") || author.includes("anton")) {
    return "https://www.studyhalo.com/media/resources/resources/MAT1503/Textbook/MAT1503_-_Prescribed_book.pdf";
  }
  if (title.includes("linear algebra") && (author.includes("hoffman") || author.includes("kunze"))) {
    return "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman,Kunze-LinearAlgebra.pdf";
  }
  if (title.includes("applied linear algebra") || author.includes("olver") || author.includes("shakiban")) {
    return "https://www.scribd.com/document/812373016/Peter-J-Olver-Cheri-Shakiban-Applied-Linear-Algebra-Prentice-Hall-2005";
  }
  if (title.includes("linear algebra done right") || author.includes("axler")) {
    return "https://linear.axler.net/LADR4e.pdf";
  }
  if (title.includes("linear algebra with applications") || author.includes("bretscher")) {
    return "https://www.scribd.com/document/424475251/Linear-Algebra-With-Applications";
  }
  if (title.includes("matrix computations") || author.includes("golub") || author.includes("van loan")) {
    return "https://www.ee.iitb.ac.in/~belur/uplod/golub-van-loan-matrix-computations-2012-edition-4th.pdf";
  }
  if (title.includes("numerical linear algebra") || author.includes("trefethen") || author.includes("bau")) {
    return "https://www.stat.uchicago.edu/~lekheng/courses/309/books/Trefethen-Bau.pdf";
  }
  if (title.includes("google's pagerank and beyond") || author.includes("langville") || author.includes("carl d. meyer")) {
    return "https://gi.cebitec.uni-bielefeld.de/_media/teaching/2019winter/alggr/langville_meyer_2006.pdf";
  }

  // 17. Object-Oriented Programming & Lab
  if (title.includes("head first java") || author.includes("sierra")) {
    return "https://www.jre-training.com/JIT/Resources/ClassTexts/Head%20First%20Java.pdf";
  }
  if (title.includes("object-oriented programming in c++") || author.includes("lafore")) {
    return "https://docs.google.com/file/d/0B21HoBq6u9TsUHhqS3JIUmFuamc/view?resourcekey=0-MYlet9RIjEukd6CvLEHUbw";
  }
  if (title.includes("c++ primer") || (author.includes("lippman") && title.includes("primer"))) {
    return "https://zhjwpku.com/assets/pdf/books/C++.Primer.5th.Edition_2013.pdf";
  }
  if (title.includes("thinking in java") || author.includes("eckel")) {
    return "https://dpvipracollege.ac.in/wp-content/uploads/2023/01/Thinking-in-Java-4th-Ed.pdf";
  }
  if (title.includes("effective java") || author.includes("bloch")) {
    return "https://kea.nu/files/textbooks/new/Effective%20Java%20%282017%2C%20Addison-Wesley%29.pdf";
  }
  if (title.includes("head first design patterns") || author.includes("freeman")) {
    return "https://ebooks.karbust.me/Technology/Head%20First%20Design%20Patterns%20-%20Building%20Extensible%20and%20Maintainable%20Object-Oriented%20Software%20-%20Eric%20Freeman,%20Elisabeth%20Robson%20-%20O'Reilly%20Media%20(2020).pdf";
  }
  if (title.includes("the c++ programming language") || author.includes("stroustrup")) {
    return "https://chenweixiang.github.io/docs/The_C++_Programming_Language_4th_Edition_Bjarne_Stroustrup.pdf";
  }
  if (title.includes("inside the c++ object model") || (author.includes("lippman") && title.includes("inside"))) {
    return "https://drive.google.com/file/d/0B8Ssy7Qkd0wcYVNaVnJNRm1BUTA/view?resourcekey=0-oj0q9ecMIn45C_MotXOsvQ";
  }
  if (title.includes("exceptional c++") || author.includes("sutter")) {
    return "https://github.com/cy20lin/Coding-books/blob/master/Exceptional%20C%2B%2B%20-%20Herb%20Sutter.pdf";
  }
  if (title.includes("clean code") || (author.includes("robert c. martin") && title.includes("clean"))) {
    return "https://www.lkhibra.ma/books/clean-code.pdf";
  }
  if (title.includes("c++ streams and file i/o") || (author.includes("josuttis") && title.includes("streams"))) {
    return "https://www.scribd.com/document/485597516/CPP-IO";
  }
  if (title.includes("the c++ standard library") || (author.includes("josuttis") && title.includes("standard library"))) {
    return "http://www.cesarkallas.net/arquivos/livros/informatica/cpp/The%20C%2B%2B%20Standard%20Library.pdf";
  }
  if (title.includes("agile software development, principles, patterns") || (author.includes("robert c. martin") && title.includes("agile"))) {
    return "https://ebooks.karbust.me/Technology/Agile%20Software%20Development,%20Principles,%20Patterns,%20and%20Practices,%202002%20Edition%20by%20Robert%20C.%20Martin-Pearson-9780135974445.pdf";
  }
  if (title.includes("uml distilled") || author.includes("martin fowler")) {
    return "https://www.cs.uah.edu/~rcoleman/CS307/Announcements/UML%20Distilled.pdf";
  }
  if (title.includes("fluent python") || author.includes("ramalho")) {
    return "https://elmoukrie.com/wp-content/uploads/2022/05/luciano-ramalho-fluent-python_-clear-concise-and-effective-programming-oreilly-media-2022.pdf";
  }
  if (title.includes("game programming patterns") || author.includes("nystrom")) {
    return "https://www.goodreads.com/book/show/23584793";
  }
  if (title.includes("design patterns: elements of reusable") || author.includes("gamma") || author.includes("gof")) {
    return "https://www.javier8a.com/itc/bd1/articulo.pdf";
  }

  if (title.includes("cloud computing: principles and paradigms") || (author.includes("buyya") && title.includes("principles"))) {
    return "https://dhoto.lecturer.pens.ac.id/lecture_notes/internet_of_things/CLOUD%20COMPUTING%20Principles%20and%20Paradigms.pdf";
  }
  if (title.includes("practical approach") || author.includes("velte")) {
    return "https://books.google.co.in/books?id=mf0LMXve2gEC&printsec=frontcover#v=onepage&q&f=false";
  }
  if (title.includes("security & virtualization") || author.includes("lpu")) {
    return "https://www.scribd.com/document/975949052/CSE423-Virtualization-And-Cloud-Computing-End-Term-Exam-Question-Paper-CSE-423-LPU";
  }
  // 18. Operating Systems
  if (title.includes("operating system concepts") || author.includes("silberschatz") || author.includes("galvin")) {
    return "https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf";
  }
  if (title.includes("modern operating systems") || author.includes("tanenbaum")) {
    return "https://www.dc16iupat.org/wp-content/uploads/2020/04/Modern.Operating.Systems.2nd.Ed_.by_.Tanenbaum-not-scanned-1-1.pdf";
  }
  if (title.includes("the linux programming interface") || author.includes("kerrisk")) {
    return "https://broman.dev/download/The%20Linux%20Programming%20Interface.pdf";
  }
  if (title.includes("programming with posix threads") || author.includes("butenhof")) {
    return "https://www.scribd.com/document/750347834/programming-with-posix-threads-butenhof-pdf-download";
  }
  if (title.includes("advanced programming in the unix environment") || author.includes("stevens") || author.includes("rago")) {
    return "https://www.unisainformatica.it/upload/files/Sistemi%20Operativi/Appunti/Advanced%20Programming%20in%20the%20UNIX%20Environment.pdf";
  }
  if (title.includes("the linux command line") || author.includes("shotts")) {
    return "https://www.kea.nu/files/textbooks/humblesec/thelinuxcommandline.pdf";
  }
  if (title.includes("linux bible") || author.includes("negus")) {
    return "https://udaygade.wordpress.com/wp-content/uploads/2015/04/linux-bible-by-christopher-negus.pdf";
  }
  if (title.includes("docker: up and running") || author.includes("kane") || author.includes("matthias")) {
    return "https://imaster.academy/contenidos-tematicos/2022/ciclo4/Programacion/Ciclo%204A/Semana_6/01_Material_Apoyo/Docker.pdf";
  }

  // 19. Compiler Design
  if (title.includes("compilers: principles, techniques, and tools") || author.includes("aho") || author.includes("ullman")) {
    return "https://dpvipracollege.ac.in/wp-content/uploads/2023/01/Alfred-V.-Aho-Monica-S.-Lam-Ravi-Sethi-Jeffrey-D.-Ullman-Compilers-Principles-Techniques-and-Tools-Pearson_Addison-Wesley-2007.pdf";
  }
  if (title.includes("engineering a compiler") || author.includes("cooper") || author.includes("torczon")) {
    return "https://gacbe.ac.in/images/E%20books/Engineering%20a%20Compiler%202nd%20ed%20-%20K.%20Cooper,%20L.%20Torczon%20(Morgan%20Kaufman,%202012)%20BBS%20bbbb.pdf";
  }
  if (title.includes("concepts of programming languages") || author.includes("sebesta")) {
    return "https://www.ime.usp.br/~alvaroma/ucsp/proglang/book.pdf";
  }
  if (title.includes("introduction to automata theory, languages and computation") || author.includes("hopcroft") || author.includes("motwani")) {
    return "https://dpvipracollege.ac.in/wp-content/uploads/2023/01/John-E.-Hopcroft-Rajeev-Motwani-Jeffrey-D.-Ullman-Introduction-to-Automata-Theory-Languages-and-Computations-Prentice-Hall-2006.pdf";
  }
  if (title.includes("llvm cookbook") || author.includes("pandey") || author.includes("sarda")) {
    return "https://www.scribd.com/document/388167952/M-K-PANDEY-Analytical-Reasoning#google_vignette";
  }
  if (title.includes("flex & bison") || author.includes("john levine") || author.includes("levine")) {
    return "https://web.iitd.ac.in/~sumeet/flex__bison.pdf";
  }
  if (title.includes("definitive antlr 4 reference") || author.includes("terence parr") || author.includes("parr")) {
    return "https://dl.icdst.org/pdfs/files3/a91ace57a8c4c8cdd9f1663e1051bf93.pdf";
  }
  if (title.includes("crafting interpreters") || (author.includes("nystrom") && title.includes("interpreters"))) {
    return "https://cdn.bookey.app/files/pdf/book/en/crafting-interpreters.pdf";
  }

  // 20. Probability & Statistics
  if (title.includes("probability and statistics for engineers") || author.includes("walpole")) {
    return "https://faculty.ksu.edu.sa/sites/default/files/503%20STAT%20-%20Text%20Book.pdf";
  }
  if (title.includes("introduction to probability and statistics") || author.includes("mendenhall")) {
    return "https://3lihandam69.wordpress.com/wp-content/uploads/2015/10/william_mendenhall_robert_j-_beaver_barbara_m-_bookfi-org.pdf";
  }
  if (title.includes("statistics for engineers and scientists") || author.includes("navidi")) {
    return "https://archive.org/details/statisticsforeng0000navi";
  }
  if (title.includes("applied regression analysis") || author.includes("draper") || author.includes("smith")) {
    return "https://pzs.dstu.dp.ua/DataMining/mls/bibl/Applied_Regression_Analysis.pdf";
  }
  if (title.includes("introduction to statistical quality control") || author.includes("montgomery")) {
    return "https://qpr.buaa.edu.cn/__local/E/80/B6/FF1D35E2A0D6F34A7C4C6086F5D_BB4E8D20_5EB939.pdf";
  }
  if (title.includes("statistics in python with scipy") || title.includes("scipy")) {
    return "https://docs.scipy.org/doc/scipy/reference/stats.html";
  }
  if (title.includes("pattern recognition and machine learning") || author.includes("bishop")) {
    return "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf";
  }
  if (title.includes("introduction to statistical learning") || (author.includes("james") && author.includes("witten"))) {
    return "https://www.stat.berkeley.edu/~rabbee/s154/ISLR_First_Printing.pdf";
  }
  if (title.includes("bayesian data analysis") || author.includes("gelman")) {
    return "https://statisticalsupportandresearch.wordpress.com/wp-content/uploads/2017/11/bayesian_data_analysis.pdf";
  }

  // 21. Problem Solving & Analysis
  if (title.includes("how to solve it") && author.includes("polya")) {
    return "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Math/Polya/George_Polya_How_To_Solve_It_.pdf";
  }
  if (title.includes("problem solving with c++") || author.includes("savitch")) {
    return "https://www.studyhalo.com/media/resources/resources/COS1512/Textbook/Walter_J_Savitch_Problem_Solving.pdf";
  }
  if (title.includes("computational thinking for the modern problem solver") || (author.includes("riley") && author.includes("hunt"))) {
    return "https://www.crcpress.com/Computational-Thinking-for-the-Modern-Problem-Solver/Riley-Hunt/p/book/9781466587779";
  }
  if (title.includes("programming logic and design") || author.includes("gaddis")) {
    return "https://www.scribd.com/document/1023708452/Starting-Out-With-Programming-Logic-and-Design-6e-Tony-Gaddis-digital-edition";
  }
  if (title.includes("a modern approach to logical reasoning") || (author.includes("aggarwal") && title.includes("logical reasoning"))) {
    return "https://dokumen.pub/a-modern-approach-to-logical-reasoning-1nbsped-8121919053-9788121919050.html";
  }
  if (title.includes("debugging: the 9 indispensable rules") || author.includes("agans")) {
    return "https://atakua.org/old-wp/wp-content/uploads/2016/03/David_J._Agans-Debugging-The_9_Indispensable_Rules_for_Finding_Even_the_Most_Elusive_Hardware_and_Software_Problem__2002.pdf";
  }
  if (title.includes("sprint: how to solve big problems") || author.includes("knapp")) {
    return "https://www.scribd.com/document/1011758161/Sprint-How-to-Solve-Big-Problems-and-Test-New-Ideas-in-Just-Five-Days-Jake-Knapp-amp-John-Zeratsky-amp-Braden-Kowitz";
  }

  // 22. Calculus
  if (title.includes("calculus: early transcendentals") || (author.includes("stewart") && title.includes("early transcendentals"))) {
    return "https://dzackgarza.com/assets/books/Stewart.pdf";
  }
  if (title.includes("thomas' calculus") || author.includes("thomas")) {
    return "https://rodrigopacios.github.io/mrpacios/download/Thomas_Calculus.pdf";
  }
  if (title.includes("calculus") && author.includes("spivak")) {
    return "https://www.cimat.mx/~gil/docencia/2013/topologia_variedades/spivak-calculus-on-manifolds.pdf";
  }
  if (title.includes("elementary differential equations") || author.includes("boyce")) {
    return "https://scienceclopedia.wordpress.com/wp-content/uploads/2019/09/william-e.-boyceelementary-differential-equations-and-boundary-value-problems-wiley-2017.pdf";
  }
  if (title.includes("numerical methods for engineers") || author.includes("chapra")) {
    return "https://www.mbit.edu.in/wp-content/uploads/2020/05/Numerical_methods_for_engineers_for_engi.pdf";
  }
  if (title.includes("doing math with python") || author.includes("saha")) {
    return "https://www.kea.nu/files/textbooks/humblepy/doingmathwithpython.pdf";
  }
  if (title.includes("mathematics for machine learning") || author.includes("deisenroth")) {
    return "https://mml-book.github.io/book/mml-book.pdf";
  }
  if (title.includes("calculus: concepts and contexts") || (author.includes("stewart") && title.includes("concepts and contexts"))) {
    return "https://archive.org/details/calculusconcepts00jame";
  }

  // 23. Software Engineering
  if (title.includes("llvm cookbook") || (author.includes("pandey") && author.includes("sarda"))) {
    return "https://www.everand.com/book/272070326/LLVM-Cookbook";
  }
  if (title.includes("software engineering: a practitioner's approach") || author.includes("pressman")) {
    return "https://www.mlsu.ac.in/econtents/16_EBOOK-7th_ed_software_engineering_a_practitioners_approach_by_roger_s._pressman_.pdf";
  }
  if (title.includes("fundamentals of software engineering") || author.includes("rajib mall")) {
    return "https://soclibrary.futa.edu.ng/books/Fundamentals%20of%20Software%20Engineering,%20Fourth%20Edition,%20Rajib%20Mall%20(%20PDFDrive%20).pdf";
  }
  if (title.includes("software engineering") && author.includes("sommerville")) {
    return "https://engineering.futureuniversity.com/BOOKS%20FOR%20IT/Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf";
  }
  if (title.includes("software requirements") || author.includes("wiegers")) {
    return "https://olivroqueaprende.com/WDK/Software_Requirements_3rd_Edition.pdf";
  }
  if (title.includes("software project management") || author.includes("hughes")) {
    return "https://dl.icdst.org/pdfs/files3/310c72a377ea5290e8a5d00a7517c909.pdf";
  }
  if (title.includes("software design: principles and practice") || author.includes("budgen")) {
    return "https://lic.haui.edu.vn/media/Book%20C%C3%B4ng%20ngh%E1%BB%87%20th%C3%B4ng%20tin/200%20Software%20Design%20(2nd%20Edition),%20Harlow.T%20(1).pdf";
  }
  if (title.includes("fundamentals of software architecture") || author.includes("mark richards")) {
    return "https://www.thoughtworks.com/content/dam/thoughtworks/documents/books/bk_Fundamentals_of_Software_Architecture_Free_Chapter_en.pdf";
  }
  if (title.includes("clean architecture") || (author.includes("robert c. martin") && title.includes("architecture"))) {
    return "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html";
  }
  if (title.includes("refactoring: improving the design of existing code") || (author.includes("fowler") && title.includes("refactoring"))) {
    return "https://silab.fon.bg.ac.rs/wp-content/uploads/2016/10/Refactoring-Improving-the-Design-of-Existing-Code-Addison-Wesley-Professional-1999.pdf";
  }
  if (title.includes("software testing foundations") || author.includes("spillner")) {
    return "https://dl.icdst.org/pdfs/files3/729e5abcef3748912096536550f28bb1.pdf";
  }
  if (title.includes("software testing: a craftsman's approach") || author.includes("jorgensen")) {
    return "https://malenezi.github.io/malenezi/SE401/Books/Software-Testing-A-Craftsman-s-Approach-Fourth-Edition-Paul-C-Jorgensen.pdf";
  }
  if (title.includes("software quality assurance") || author.includes("galin")) {
    return "https://hero.lecturer.pens.ac.id/datahero/kuliah/MKPL/Software%20Quality%20Assurance%20From%20Theory%20to%20Implementation.pdf";
  }
  if (title.includes("scrum: the art of doing twice the work") || author.includes("sutherland")) {
    return "https://archive.org/details/scrumartofdoingt0000suth_m1a9";
  }
  if (title.includes("agile software development with scrum") || author.includes("schwaber")) {
    return "https://www.scribd.com/document/546321466/Ken-Schwaber-Mike-Beedle-Agile-Software-Development-with-Scrum-2001-Prentice-Hall-libgen-li";
  }
  if (title.includes("devops handbook") || (author.includes("gene kim") && title.includes("devops"))) {
    return "https://github.com/RavinRau/Ebooks/blob/main/Devops/The%20Phoenix%20Project%20A%20Novel%20About%20IT,%20DevOps,%20and%20Helping%20Your%20Business%20Win%20%28Gene%20Kim,%20Kevin%20%20Behr,%20George%20Spafford%29.pdf";
  }
  if (title.includes("software evolution and maintenance") || author.includes("tripathy")) {
    return "https://www.philadelphia.edu.jo/academics/mtaye/uploads/software-evolution-and-maintenance%20(1).pdf";
  }
  if (title.includes("software configuration management patterns") || author.includes("berczuk")) {
    return "http://vnn1.online.fr/Cafeteria/Project%20management/(Addison%20Wesley)%20Software%20Configuration%20Management%20Patterns,%20Effective%20Teamwork,%20Practical%20Integration.pdf";
  }
  if (title.includes("designing data-intensive applications") || author.includes("kleppmann")) {
    return "https://0-lucas.github.io/digital-garden/99.-Books/Martin-Kleppmann---Designing-Data-Intensive-Applications_-O%E2%80%99Reilly-Media-(2017).pdf";
  }

  // 24. Web Technologies Lab
  if (title.includes("learning web design") || author.includes("robbins")) {
    return "https://www.sccs.swarthmore.edu/users/09/leo/textbook.pdf";
  }
  if (title.includes("html and css: design and build websites") || author.includes("duckett")) {
    return "https://cc-mnnit.github.io/2021-22-Classes/WebDev/2021_04_26_WebClass-2/HTML_and_CSS_design_and_build_websites.pdf";
  }
  if (title.includes("css: the definitive guide") || author.includes("eric a. meyer") || author.includes("meyer")) {
    return "http://ommolketab.ir/aaf-lib/3is96dr3kb27mhirroqj76fb7lzc3j.pdf";
  }
  if (title.includes("responsive web design with html5 and css") || author.includes("ben frain") || author.includes("frain")) {
    return "https://www.scribd.com/document/275428463/Responsive-Web-Design-with-HTML5-and-CSS3-Second-Edition-Sample-Chapter";
  }
  if (title.includes("eloquent javascript") || author.includes("haverbeke")) {
    return "https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf";
  }
  if (title.includes("you don't know js yet") || title.includes("you don't know js") || author.includes("kyle simpson")) {
    return "https://archive.org/details/kyle-simpson-all-6/mode/1up";
  }
  if (title.includes("dom scripting") || author.includes("jeremy keith")) {
    return "https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/JavaScript/FriendsOfED.DOM.Scripting.Web.Design.with.JavaScript.and.the.Document.Object.Model.pdf";
  }
  if (title.includes("javascript: the definitive guide") || author.includes("flanagan")) {
    return "https://forum.freemdict.com/uploads/short-url/lI79nDbeiEq7d3M6TUUfZGEP6zc.pdf";
  }
  if (title.includes("learning react") || author.includes("alex banks") || author.includes("porcello")) {
    return "https://ebooks.karbust.me/Technology/Learning%20React%20-%20Modern%20Patterns%20for%20Developing%20React%20Apps%20-%20Alex%20Banks,%20Eve%20Porcello%20-%20O'Reilly%20Media%20(2020).pdf";
  }
  if (title.includes("node.js web development") || author.includes("herron")) {
    return "https://www.scribd.com/document/1014536078/Node-Web-Development-Second-Edition-David-Herron-ebook-testbank-solutions-smart-reader-format";
  }
  if (title.includes("mern architecture and development") || author.includes("greg lim")) {
    return "https://mail.literecords.com/public/lim_g_beginning_mern_stack_build_and_deploy_a_full_stack_mon.pdf";
  }
  if (title.includes("testing javascript applications") || author.includes("lucas da costa") || author.includes("da costa")) {
    return "https://manning.com/books/testing-javascript-applications";
  }
  if (title.includes("pro git") || author.includes("chacon") || author.includes("straub")) {
    return "https://git-scm.com/book/en/v2";
  }
  if (title.includes("full-stack react projects") || author.includes("shama hoque")) {
    return "https://edu.anarcho-copy.org/Programming%20Languages/Node/full-stack-react-projects.pdf";
  }

  // Artificial Intelligence & Machine Learning
  if (title.includes("artificial intelligence: a modern approach") || author.includes("russell") || author.includes("norvig")) {
    return "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf";
  }
  if (title.includes("introduction to machine learning with python") || author.includes("müller") || author.includes("muller") || author.includes("guido")) {
    return "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf";
  }
  if (title.includes("python for data analysis") || author.includes("mckinney")) {
    return "https://www.lkhibra.ma/books/Python-for-Data-Analysis.pdf";
  }
  if (title.includes("feature engineering for machine learning") || author.includes("zheng")) {
    return "https://soclibrary.futa.edu.ng/books/feature-engineering-for-machine-learning-principles-and-techniques-for-data-scientists.9781491953242.78116%20(4).pdf";
  }
  if (title.includes("elements of statistical learning") || author.includes("hastie") || author.includes("tibshirani")) {
    return "https://jqichina.wordpress.com/wp-content/uploads/2012/02/the-elements-of-statistical-learning.pdf";
  }
  if (title.includes("reinforcement learning") || author.includes("sutton") || author.includes("barto")) {
    return "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf";
  }
  if (title.includes("deep learning") && (author.includes("goodfellow") || author.includes("bengio"))) {
    return "https://aikosh.indiaai.gov.in/static/Deep+Learning+Ian+Goodfellow.pdf";
  }
  if (title.includes("deep learning with python") || author.includes("chollet")) {
    return "https://dn790002.ca.archive.org/0/items/deep-learning-collection-pdf/Deep%20Learning%20with%20Python%20-%20Fran%C3%A7ois%20Chollet%20-%20Manning%20(2018).pdf";
  }
  if (title.includes("computer vision: algorithms and applications") || author.includes("szeliski")) {
    return "https://eclass.hmu.gr/modules/document/file.php/TM152/Books/Computer%20Vision%3A%20Algorithms%20and%20Applications%20-%20Szeliski.pdf";
  }
  if (title.includes("speech and language processing") || author.includes("jurafsky")) {
    return "https://web.stanford.edu/~jurafsky/slp3/ed3book_jan26.pdf";
  }
  if (title.includes("generative deep learning") || author.includes("foster")) {
    return "https://www.scribd.com/document/878774407/Generative-Deep-Learning-PDF";
  }
  if (title.includes("applied predictive modeling") || author.includes("kuhn") || author.includes("johnson")) {
    return "https://vuquangnguyen2016.wordpress.com/wp-content/uploads/2018/03/applied-predictive-modeling-max-kuhn-kjell-johnson_1518.pdf";
  }
  if (title.includes("hands-on machine learning") || author.includes("géron") || author.includes("geron")) {
    return "http://14.139.161.31/OddSem-0822-1122/Hands-On_Machine_Learning_with_Scikit-Learn-Keras-and-TensorFlow-2nd-Edition-Aurelien-Geron.pdf";
  }
  if (title.includes("designing machine learning systems") || author.includes("huyen")) {
    return "https://18636251.s21i.faiusr.com/61/ABUIABA9GAAghIK0ugYowM2h3QY.pdf";
  }

  // Big Data
  if (title.includes("hadoop: the definitive guide") || (author.includes("tom white") && title.includes("hadoop"))) {
    return "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf";
  }
  if (title.includes("big data: principles and best practices") || (author.includes("marz") && author.includes("warren"))) {
    return "https://manning-content.s3.amazonaws.com/download/3/4142054-00c8-4115-879e-946c643f3665/big-data-ch01.pdf";
  }
  if (title.includes("big data architecture") || (author.includes("marz") && title.includes("architecture"))) {
    return "https://www2.seas.gwu.edu/~bell/csci6444/outline/Big%20Data%20Architecture.pdf";
  }
  if (title.includes("data science and big data analytics") || author.includes("emc")) {
    return "https://aitskadapa.ac.in/e-books/AI&DS/BIG%20DATA/Data%20Science%20_%20Big%20Data%20Analytics%20(%20PDFDrive%20).pdf";
  }
  if (title.includes("learning spark") || author.includes("damji")) {
    return "https://www.scribd.com/document/579443711/LearningSpark-EXCERPT";
  }
  if (title.includes("programming hive") || author.includes("capriolo")) {
    return "https://sharathkumarblog.wordpress.com/wp-content/uploads/2016/05/programming_hive.pdf";
  }
  if (title.includes("nosql distilled") || author.includes("sadalage") || author.includes("fowler")) {
    return "https://www.bigdata.ir/wp-content/uploads/2016/08/6C594096C6E33AE41A6D365F2C4588C6.pdf";
  }
  if (title.includes("data mining: concepts and techniques") || author.includes("jiawei han")) {
    return "https://myweb.sabanciuniv.edu/rdehkharghani/files/2016/02/The-Morgan-Kaufmann-Series-in-Data-Management-Systems-Jiawei-Han-Micheline-Kamber-Jian-Pei-Data-Mining.-Concepts-and-Techniques-3rd-Edition-Morgan-Kaufmann-2011.pdf";
  }
  if (title.includes("sql for data analysis") || author.includes("tanimura") || author.includes("cathy")) {
    return "https://dokumen.pub/sql-for-data-analysis-advanced-techniques-for-transforming-data-into-insights-1nbsped-1492088781-9781492088783.html";
  }
  if (title.includes("mastering apache spark") || (author.includes("andrew morgan") && title.includes("spark"))) {
    return "https://sites.google.com/view/1vionaerzu";
  }
  if (title.includes("storytelling with data") || author.includes("knaflic")) {
    return "https://github.com/peyman886/Data_Visualization/blob/main/Cole%20Nussbaumer%20Knaflic%20-%20Storytelling%20with%20Data_%20A%20Data%20Visualization%20Guide%20for%20Business%20Professionals%20(2016_2015%2C%20John%20Wiley%20%26%20Sons)%20-%20libgen.li.pdf";
  }
  if (title.includes("kafka: the definitive guide") || author.includes("shapira")) {
    return "https://www.confluent.io/resources/ebook/kafka-the-definitive-guide/?utm_medium=sem&utm_source=google&utm_campaign=ch.sem_br.nonbrand_tp.prs_tgt.kafka_mt.mbm_rgn.apac_sbrgn.india_lng.eng_dv.all_con.kafka-concepts_term.kafka-concepts&utm_term=kafka%20concepts&creative=&device=c&placement=&gad_source=1&gad_campaignid=14313791163&gbraid=0AAAAADRv2c1mJWSsStQ1edjw1rLJugSNk&gclid=Cj0KCQjw4JbTBhCoARIsALWUaBsURcxOmFOS98ZAtolo2VDVq2xApcQAQnGFH22Y_KE5nkernEvLjGEaAoP0EALw_wcB";
  }
  if (title.includes("learning spark") || author.includes("jules")) {
    return "https://www.slideshare.net/slideshow/learning-spark-lightningfast-data-analytics-2nd-edition-jules-s-damji/279415617";
  }
  if (title.includes("big data in practice") || author.includes("bernard marr")) {
    return "https://cdn.oujdalibrary.com/books/395/395-big-data-in-practice-how-45-successful-companies-used-big-data-analytics-to-deliver-extraordinary-results-(www.tawcer.com).pdf";
  }

  // Electronics & Electrical Engineering
  if (title.includes("basic electrical engineering") || author.includes("kothari") || author.includes("nagrath")) {
    return "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false";
  }
  if (title.includes("electrical technology vol 1") || title.includes("electrical technology") || author.includes("theraja")) {
    return "https://dl.ojocv.gov.et/admin_/book/a-textbook-of-electrical-technology-volume-i-basic-electrical-engineering-b-l-theraja.pdf";
  }
  if (title.includes("engineering circuit analysis") || author.includes("hayt")) {
    return "https://elcom-team.com/Subjects/%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D9%83%D9%87%D8%B1%D8%A7%D8%A6%D9%8A%D8%A9%201/%D8%A7%D9%84%D9%83%D8%AA%D8%AA%D8%A8%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84/cct1-book(9ed).pdf";
  }
  if (title.includes("electrical and electronic measurements") || author.includes("sawhney")) {
    return "https://www.scribd.com/document/558233504/A-K-Sawhney-Puneet-Sawhney-A-Course-in-Electrical-and-Electronic-Measurements-and-Instrumentation-DHANPAT-RAI-Co-Pvt-Ltd-2012";
  }
  if (title.includes("electrical machinery") || author.includes("bimbhra")) {
    return "https://electricalconnects.com/frontend/images/free_items/electrical-machinery-by-dr-p-s-bimbhra.pdf";
  }
  if (title.includes("electronic devices and circuit theory") || author.includes("boylestad")) {
    return "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf";
  }
  if (title.includes("microelectronic circuits") || author.includes("sedra") || author.includes("smith")) {
    return "https://dl.konkur.in/2025/02/Microelectronic2020-%5Bwww.konkur.in%5D.pdf";
  }
  if (title.includes("op-amps") || author.includes("gayakwad")) {
    return "https://www.scribd.com/document/571983342/Op-Amp-and-Linear-Integrated-Circuit-by-Ramakant-A-Gayakwad";
  }
  if (title.includes("electronic instrumentation and measurements") || (author.includes("bell") && title.includes("instrumentation"))) {
    return "https://www.scribd.com/document/339495222/Electronic-Instrumentation-and-Measurements-D-a-bell";
  }
  if (title.includes("principles of communication systems") || author.includes("taub") || author.includes("schilling") || author.includes("ziemer") || author.includes("tranter")) {
    return "https://www.fccdecastro.com.br/pdf/PCSMN.pdf";
  }
  if (title.includes("microprocessor architecture") || author.includes("gaonkar") || title.includes("8085")) {
    return "https://www.scribd.com/document/423123924/Microprocessor-BY-Ramesh-Gaonkar-color-pdf";
  }
  if (title.includes("electrical wiring estimating") || author.includes("uppal")) {
    return "https://www.scribd.com/document/573035269/Chapter-1-Electrical-Wiring-Estimating-Costing-SL-Uppal";
  }
  if (title.includes("non-conventional energy") || author.includes("khan")) {
    return "https://www.scribd.com/document/410435339/290987441-Non-Conventional-Energy-Source-B-H-Khan-pdf";
  }
  if (title.includes("principles of power system") || author.includes("mehta")) {
    return "https://koracademy.com/sites/default/files/inline-files/vk%20mehta.pdf";
  }
  if (title.includes("electric vehicle technology") || author.includes("larminie")) {
    return "https://www.iqytechnicalcollege.com/BAE%20685-Electric%20Vehicle%20Technology.pdf";
  }

  // Mechanical Engineering & Physics
  if (title.includes("basic mechanical engineering") || author.includes("prabhu")) {
    return "https://tjprabhu.com/4.BasicMechEnggWebIntro.pdf";
  }
  if (title.includes("elements of mechanical engineering") || author.includes("gopalkrishna")) {
    return "https://www.scribd.com/document/547502409/Elements-of-Mechanical-Engineering-By-K-R-Gopalkrishna#google_vignette";
  }
  if (title.includes("material science and engineering") || title.includes("materials science") || author.includes("callister")) {
    return "https://archive.org/details/materials-science-and-engineering-8th-edition-callister_201910";
  }
  if (title.includes("engineering mechanics: statics") || (author.includes("timoshenko") && author.includes("young"))) {
    return "https://www.scribd.com/document/897497034/Engineering-Mechanics-Timoshenko";
  }
  if (title.includes("engineering mechanics") || author.includes("bhavikatti")) {
    return "https://books.google.com.bd/books?id=4wkLl4NvmWAC&printsec=copyright#v=onepage&q&f=false";
  }
  if (title.includes("theory of machines") || author.includes("rattan") || author.includes("ratan")) {
    return "https://www.scribd.com/document/571824888/Theory-of-Machines-s-s-Ratan";
  }
  if (title.includes("engineering thermodynamics") || (author.includes("nag") && title.includes("thermodynamics"))) {
    return "https://soaneemrana.com/onewebmedia/Thermodynamics%20by%20PK%20Nag.pdf";
  }
  if (title.includes("heat and mass transfer") || (author.includes("rajput") && title.includes("heat"))) {
    return "https://referenceglobe.com/kpsslp/support/upload_videos/Heat%20and%20Mass%20Transfer%20%20rajput_1586515462.pdf";
  }
  if (title.includes("internal combustion engines") || author.includes("ganesan")) {
    return "https://www.scribd.com/document/723956758/Internal-Combustion-Engines-by-Ganesan-4-Ed";
  }
  if (title.includes("power plant engineering") || (author.includes("nag") && title.includes("power plant"))) {
    return "https://www.scribd.com/document/693751568/Power-Plant-Engineering-Pk-Nag";
  }
  if (title.includes("refrigeration and air conditioning") || author.includes("arora")) {
    return "https://solucionclimatica.com/wp-content/uploads/2022/07/Refrigeration-and-Air-Conditioning-by-Ramesh-Chandra-Arora.pdf";
  }
  if (title.includes("manufacturing technology") || author.includes("rao")) {
    return "https://4alltechnology.wordpress.com/wp-content/uploads/2018/11/manufacturingtechnology-vol-1-p-n-rao.pdf";
  }
  if (title.includes("workshop technology") || author.includes("bawa")) {
    return "https://books.google.co.in/books/about/Workshop_Technology.html?id=5xP-rQEACAAJ&redir_esc=y";
  }
  if (title.includes("robotics and control") || author.includes("mittal")) {
    return "https://www.scribd.com/document/611567531/Robotics-and-Control-by-Mittal-and-Nagrath";
  }
  if (title.includes("automobile engineering") || author.includes("kirpal singh")) {
    return "https://www.scribd.com/document/630220368/Automobile-Vol1-Kripal-Singh-pdf";
  }
  if (title.includes("mechanical measurements") || (author.includes("rajput") && (title.includes("measurements") || title.includes("metrology")))) {
    return "https://dokumen.pub/mechanical-measurements-and-instrumentation-9350142856.html";
  }

  if (title.includes("applied physics lab manual")) {
    return "https://books.google.co.in/books?id=KQobEAAAQBAJ&lpg=PR2&pg=PP2#v=onepage&q&f=false";
  }
  if (title.includes("practical physics") && author.includes("arora")) {
    return "https://archive.org/details/practicalphysics00aror";
  }
  if (title.includes("advanced practical physics") || author.includes("worsnop") || author.includes("flint")) {
    return "https://archive.org/details/advancedpractica00worsuoft";
  }

  // Reasoning & Aptitude
  if (title.includes("analytical reasoning") || author.includes("pandey")) {
    return "https://www.scribd.com/document/388167952/M-K-PANDEY-Analytical-Reasoning";
  }
  if (title.includes("quantitative aptitude") && (author.includes("aggarwal") || title.includes("aggarwal"))) {
    return "https://www.scribd.com/document/1027615967/Rs-Aggarwal-Quantitative-Aptitude-New-Em";
  }
  if (title.includes("fast track objective mathematics") || title.includes("fast track objective arithmetic") || author.includes("rajesh verma")) {
    return "https://blogmedia.testbook.com/blog/wp-content/uploads/2023/04/afastrack-objective-mathematics-bd6e1c73.pdf";
  }
  if (title.includes("new approach to reasoning") || author.includes("sijwali")) {
    return "https://www.scribd.com/document/754925971/A-New-Approach-to-REASONING-Verbal-Non-Verbal-1";
  }
  if (title.includes("data interpretation") || author.includes("ananta ashisha")) {
    return "https://www.scribd.com/document/473447897/Data-Interpretation-and-Data-Sufficiency-By-Ananta-Ashisha-Data-Interpretation-Arihant-Expert";
  }
  if (title.includes("how to prepare for quantitative aptitude") || author.includes("arun sharma")) {
    return "https://www.scribd.com/document/1023111016/How-to-Prepare-for-Quantitative-Aptitude-for-CAT-by-Arun-Sharma";
  }

  // Clean fallback WITHOUT Google redirect (btnI=I)
  return `https://www.google.com/search?q=${encodeURIComponent((book.title || "") + " " + (book.author || "") + " pdf")}`;
};
