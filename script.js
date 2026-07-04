// --- Dummy Data ---
// In a real app, these would be fetched from an API or local filesystem.
const songs = [
    {
        id: 's1',
        title: 'Naatu Naatu',
        artist: 'M. M. Keeravani, Rahul Sipligunj',
        album: 'RRR',
        duration: '00:30',
        category: 'EDM',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/dd/a4/8edda474-3fe1-3fe6-43d3-765db520a29b/mzaf_11740310005222997767.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dd/39/14/dd3914e5-a2f3-b355-51f3-9a1f0e3ca246/8903431853592_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/naatu.txt'
    },
    {
        id: 's2',
        title: 'Samajavaragamana',
        artist: 'Sid Sriram, Thaman S',
        album: 'Ala Vaikunthapurramuloo',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/29/a7/55/29a75528-3808-d849-ad00-9e714bf12621/mzaf_2813549342968292058.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/98/c1/5398c1cf-7c16-24a6-bfa3-391dc6015376/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/samajavaragamana.txt'
    },
    {
        id: 's3',
        title: 'Oo Antava',
        artist: 'Indravathi Chauhan, DSP',
        album: 'Pushpa: The Rise',
        duration: '00:30',
        category: 'Hip-Hop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d5/f8/19/d5f8195c-8668-e1f3-fb59-77d8d35b1b53/mzaf_7616288806017835265.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/34/7b/ec347b9b-0add-c529-4746-799277a5e1c0/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/ooantava.txt'
    },
    {
        id: 's4',
        title: 'Butta Bomma',
        artist: 'Armaan Malik, Thaman S',
        album: 'Ala Vaikunthapurramuloo',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/87/1c/00871cd6-9a64-717a-2072-d19c49f94682/mzaf_4402448724622500589.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/19/58/9e/19589e6d-bec0-b613-326c-dc7b72cb8f64/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/buttabomma.txt'
    },
    {
        id: 's5',
        title: 'Dheera Dheera',
        artist: 'Ravi Basrur',
        album: 'KGF Chapter 1',
        duration: '00:30',
        category: 'Rock',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/ce/a4/fbcea4eb-421c-f527-b7af-4e9bce7497fb/mzaf_15017765199623020920.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ae/3a/9f/ae3a9fc8-914e-1736-697f-99b3950c8879/8903245474402.jpg/600x600bb.jpg',
        lyrics: 'lyrics/dheera.txt'
    },
    {
        id: 's6',
        title: 'Take Five',
        artist: 'Dave Brubeck',
        album: 'Dave Brubeck\'s Greatest Hits',
        duration: '00:30',
        category: 'Jazz',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cc/49/99/cc4999b7-b550-cf81-af69-a4c63475fc71/mzaf_10897310118931669841.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/32/c0/c332c05b-d589-c64f-7ba4-c3633fe75e3f/mzi.uusqmfyq.jpg/600x600bb.jpg',
        lyrics: 'lyrics/takefive.txt'
    },
    {
        id: 's7',
        title: 'Affection',
        artist: 'Jinsang',
        album: 'Life',
        duration: '00:30',
        category: 'Lo-Fi',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/7f/5a/277f5a90-6ca3-a8e8-931c-8dd7c1d472fd/mzaf_4569701282117560653.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/33/a5/2f/33a52fc2-d77b-9408-6d5b-af389ee28c43/cover_4018939360092.jpg/600x600bb.jpg',
        lyrics: 'lyrics/affection.txt'
    },
    {
        id: 's8',
        title: 'Clair de Lune',
        artist: 'Claude Debussy',
        album: 'Clair de Lune - Single',
        duration: '00:30',
        category: 'Classical',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/68/35/c36835b6-9cb3-a20a-088b-6c7d39e39636/mzaf_484141242926915999.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music/5f/f2/dc/mzi.cjpwuohz.jpg/600x600bb.jpg',
        lyrics: 'lyrics/clairdelune.txt'
    },
    {
        id: 's9',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'Blinding Lights - Single',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg',
        lyrics: 'lyrics/blindinglights.txt'
    },
    {
        id: 's10',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'Greatest Hits',
        duration: '00:30',
        category: 'Rock',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/11/52/8f1152a9-fd5f-0021-f546-b97579c22ec3/mzaf_3962258993076347789.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg',
        lyrics: 'lyrics/bohemian.txt'
    },
    {
        id: 's11',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        album: '÷ (Deluxe)',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg',
        lyrics: 'lyrics/shapeofyou.txt'
    },
    {
        id: 's12',
        title: 'Despacito',
        artist: 'Luis Fonsi & Daddy Yankee',
        album: 'VIDA',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/40/5b/e7/405be722-3ec9-ba27-7469-002182d57b39/mzaf_14120258742032474456.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e2/ef/f0/e2eff0bc-c51d-7de5-9280-6891ddcee71b/18UMGIM85289.rgb.jpg/600x600bb.jpg',
        lyrics: 'lyrics/despacito.txt'
    },
    {
        id: 's13',
        title: 'Dance Monkey',
        artist: 'Tones And I',
        album: 'The Kids Are Coming',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/1a/32/431a3203-7e62-c7b1-0377-824aded16096/mzaf_7471896698419931094.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/87/ed/42/87ed4279-d8d7-840f-90b5-2bffe34699ef/075679839237.jpg/600x600bb.jpg',
        lyrics: 'lyrics/dancemonkey.txt'
    },
    {
        id: 's14',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        album: 'Nevermind',
        duration: '00:30',
        category: 'Rock',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg',
        lyrics: 'lyrics/teenspirit.txt'
    },
    {
        id: 's15',
        title: 'bad guy',
        artist: 'Billie Eilish',
        album: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
        duration: '00:30',
        category: 'Pop',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/87/1f/c3871f7e-3260-d615-1c66-5fdca2c3a48f/mzaf_10721331211699880949.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.jpg',
        lyrics: 'lyrics/badguy.txt'
    },
    {
        id: 's16',
        title: 'Ninnu Kori',
        artist: 'K.S. Chithra, Ilaiyaraaja',
        album: 'Gharshana',
        duration: '00:30',
        category: 'Retro',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a1/1e/bb/a11ebbc2-641f-ceab-a3ca-b809d9efb2a4/mzaf_12351267893605920872.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9e/b2/bf/9eb2bfdf-02c2-9a7f-0c49-d79873a7b7de/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/ninnukori.txt'
    },
    {
        id: 's17',
        title: 'Oka Laila Kosam',
        artist: 'SPB',
        album: 'Ramudu Parashuramudu',
        duration: '00:30',
        category: 'Retro',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a9/7f/91/a97f91d5-6edd-906f-40e4-41eb5a4c544c/mzaf_18114101124601544665.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/24/66/592466eb-ac83-50ff-e86b-237d2df2a236/8905750025377.jpg/600x600bb.jpg',
        lyrics: 'lyrics/okalaila.txt'
    },
    {
        id: 's18',
        title: 'Chinna Chinna Aasa',
        artist: 'Ilaiyaraaja',
        album: 'Naanum Oru Indian',
        duration: '00:30',
        category: 'Retro',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/d9/92/47d992d1-7a22-7fb7-894a-8d0fd66cfce3/mzaf_14850207473358342094.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0d/94/22/0d9422a9-d5cd-8837-4301-3bb5baed5598/8902894251266_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/chinna.txt'
    },
    {
        id: 's19',
        title: 'Srivalli',
        artist: 'Javed Ali',
        album: 'Pushpa The Rise',
        duration: '00:30',
        category: 'Melody',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/78/5e/fd785e61-788e-a229-5009-d57c09255d65/mzaf_5333823146379504338.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7e/78/81/7e78812c-0445-ebad-321c-1beebaaa328a/8902894361460_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/srivalli.txt'
    },
    {
        id: 's20',
        title: 'Inkem Inkem',
        artist: 'Sid Sriram',
        album: 'Geetha Govindam',
        duration: '00:30',
        category: 'Melody',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/db/18/0ddb1800-d449-e08b-c47f-773199f167ba/mzaf_1588272401121796958.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e1/19/82/e119827d-aecb-517e-75a5-0bbd122c8443/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/inkem.txt'
    },
    {
        id: 's21',
        title: 'Aradhya',
        artist: 'Sid Sriram',
        album: 'Kushi',
        duration: '00:30',
        category: 'Melody',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/28/0f/72/280f72dc-0d59-5b1c-6630-fc30a8e7271f/mzaf_8841015776604965804.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f5/a1/ed/f5a1ed5e-d3c2-a4dc-27df-2cedd9b159ec/197189406225.jpg/600x600bb.jpg',
        lyrics: 'lyrics/aradhya.txt'
    },
    {
        id: 's22',
        title: 'Neeli Neeli Aakasam',
        artist: 'Sid Sriram',
        album: '30 Rojullo Preminchadam Ela',
        duration: '00:30',
        category: 'Melody',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6d/54/ad/6d54ade1-7625-8dee-a147-e89afffddbb8/mzaf_17003487550385654497.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/5e/3b/f05e3bde-d1b2-234c-f9ee-09387056af7c/8903431767189_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/neelineeli.txt'
    },
    {
        id: 's23',
        title: 'Nee Kannu Neeli Samudram',
        artist: 'Javed Ali',
        album: 'Uppena',
        duration: '00:30',
        category: 'Melody',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/12/85/34/12853461-4a89-0825-f8b9-f34a4244237d/mzaf_7933769262972519634.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/08/5f/90/085f9021-b2d4-cd8d-1a3e-35e24db23fc3/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/neekannu.txt'
    },
    {
        id: 's24',
        title: 'Kurchi Madathapetti',
        artist: 'S.S. Thaman',
        album: 'Guntur Kaaram',
        duration: '00:30',
        category: 'Trending',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/03/95/c3/0395c3a4-368a-3aa5-06f8-f9e0ebd553a4/mzaf_1960951393962288235.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/kurchi.txt'
    },
    {
        id: 's25',
        title: 'Samayama',
        artist: 'Anurag Kulkarni',
        album: 'Hi Nanna',
        duration: '00:30',
        category: 'Trending',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/9c/a9/949ca9d4-d36e-5b77-bafa-2e5f7261423d/mzaf_3943643360697243799.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/4c/1d/644c1db5-68f8-0640-21e2-dd440f7290e7/8903431963253_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/samayama.txt'
    },
    {
        id: 's26',
        title: 'Inthandham',
        artist: 'S.P. Charan',
        album: 'Sita Ramam',
        duration: '00:30',
        category: 'Trending',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/c2/93/fac2934d-d9de-1e85-f999-22b5b0852771/mzaf_8467517637936464628.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b3/18/c7/b318c787-c10a-a5cf-1f76-8308ad0d76b0/196589368041.jpg/600x600bb.jpg',
        lyrics: 'lyrics/inthandham.txt'
    },
    {
        id: 's27',
        title: 'Ramuloo Ramulaa',
        artist: 'Anurag Kulkarni, Mangli',
        album: 'Ala Vaikunthapurramuloo',
        duration: '00:30',
        category: 'Trending',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/7b/7d/217b7d89-df73-12db-ca5f-2fee71f47dce/mzaf_2385408187580859158.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/4d/7c/4a/4d7c4a33-0c3b-b0e5-1e5a-8182d9a25811/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/ramuloo.txt'
    },
    {
        id: 's28',
        title: 'Kalaavathi',
        artist: 'Sid Sriram',
        album: 'Sarkaru Vaari Paata',
        duration: '00:30',
        category: 'Trending',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/47/2f/a0/472fa0e8-5643-6461-0653-56b87aa67fab/mzaf_17345742665182397098.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/13/96/dd1396a1-fd23-693c-137a-b10047cc2b78/196626439680.jpg/600x600bb.jpg',
        lyrics: 'lyrics/kalaavathi.txt'
    },
    {
        id: 's29',
        title: 'Suprabhatam',
        artist: 'M. S. Subbulakshmi',
        album: 'Lakshmi Kataksham',
        duration: '00:30',
        category: 'Devotional',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8a/78/d0/8a78d0f0-324c-f887-0cf8-305f20b15f0e/mzaf_12219927684904927435.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/c0/ad/d8/c0add8da-cd09-777f-56d0-4d16e95be8ae/191773290511.jpg/600x600bb.jpg',
        lyrics: 'lyrics/suprabhatam.txt'
    },
    {
        id: 's30',
        title: 'Govinda Namalu',
        artist: 'Sasidhar Darla',
        album: 'Govinda Namalu - EP',
        duration: '00:30',
        category: 'Devotional',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/62/03/6f/62036ff0-d028-73f3-07de-2f3dd253434f/mzaf_2556487868596830701.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/08/10/75/081075eb-cfde-50b8-bcc2-621d58390828/198026779045.jpg/600x600bb.jpg',
        lyrics: 'lyrics/govinda.txt'
    },
    {
        id: 's31',
        title: 'Feel My Love',
        artist: 'KK',
        album: 'Aarya',
        duration: '00:30',
        category: 'Arya Special',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/0b/c4/b10bc405-3a9b-b21e-d791-c6b638847a34/mzaf_1977181938635985289.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/b5/c0/ae/b5c0ae0b-987b-4d81-1c1e-fd6ca7249917/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/feelmylove.txt'
    },
    {
        id: 's32',
        title: 'Aa Ante Amalapuram',
        artist: 'Malathy',
        album: 'Maximum',
        duration: '00:30',
        category: 'Arya Special',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/7a/4a/a87a4ad7-5981-f89d-01f9-c99f1b371e1c/mzaf_4830056416038134384.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music30/v4/40/0c/06/400c06c5-6feb-0e95-4afe-a8943c092dee/8902894699587_cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/aaante.txt'
    },
    {
        id: 's33',
        title: 'Nuvvunte',
        artist: 'Sagar & Sumangali',
        album: 'Aarya',
        duration: '00:30',
        category: 'Arya Special',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/7e/26/0f7e262e-3153-bfff-f983-d59da8fd213a/mzaf_5063362976377679290.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/b5/c0/ae/b5c0ae0b-987b-4d81-1c1e-fd6ca7249917/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/nuvvunte.txt'
    },
    {
        id: 's34',
        title: 'O My Brotheru',
        artist: 'Ravi Varma',
        album: 'Aarya',
        duration: '00:30',
        category: 'Arya Special',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/f1/6d/54/f16d542f-a874-c035-2fbd-942d93253549/mzaf_2050741017231087019.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/43/13/82/431382de-2a9a-37c2-d109-49343b34071b/cover.jpg/600x600bb.jpg',
        lyrics: 'lyrics/omybrotheru.txt'
    },
    {
        id: 's35',
        title: 'Uppenantha',
        artist: 'Devi Sri Prasad & KK',
        album: 'Aarya - 2',
        duration: '00:30',
        category: 'Arya Special',
        src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/64/47/29/644729e7-3670-b191-45e1-c92b220d353a/mzaf_1326764644203168642.plus.aac.p.m4a',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/c0/cb/87/c0cb876b-471b-abe7-d8b0-17f3c7c452fd/884977369298.jpg/600x600bb.jpg',
        lyrics: 'lyrics/uppenantha.txt'
    }
];

// --- State Management ---
let state = {
    currentSongIndex: 0,
    isPlaying: false,
    isMuted: false,
    volume: 100,
    repeatMode: 'none', // 'none', 'one', 'all'
    isShuffle: false,
    favorites: [],
    recentlyPlayed: [],
    theme: 'dark',
    currentFilter: 'all',
    searchQuery: '',
    filteredSongs: [...songs],
    playlistSequence: [], // For shuffle logic
    isLyricsVisible: false
};

// --- DOM Elements ---
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const stopBtn = document.getElementById('stop-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const muteBtn = document.getElementById('mute-btn');
const favBtn = document.getElementById('favorite-btn');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.getElementById('progress-bar');
const progressWrapper = document.getElementById('progress-wrapper');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');

const coverImg = document.getElementById('cover-img');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const songCategory = document.getElementById('song-category');
const equalizer = document.getElementById('equalizer');

const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const viewTitle = document.getElementById('view-title');
const navItems = document.querySelectorAll('.nav-menu li[data-filter]');
const categoryItems = document.querySelectorAll('#category-list li');

const themeSwitch = document.getElementById('theme-switch');
const toastContainer = document.getElementById('toast-container');
const loadingScreen = document.getElementById('loading-screen');
const appContainer = document.querySelector('.app-container');

const toggleLyricsBtn = document.getElementById('toggle-lyrics-btn');
const playlistContainer = document.getElementById('playlist-container');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsContent = document.getElementById('lyrics-content');

// --- Twinkling Stars & Floating Notes Effect ---
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars-container';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        // Random position
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        // Increased size for stars (2px to 5px)
        const size = Math.random() * 3 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        // Random animation duration
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        // Random delay
        star.style.animationDelay = (Math.random() * 5) + 's';
        
        starsContainer.appendChild(star);
    }
    
    // Floating Music Notes
    const noteSymbols = ['♪', '♫', '🎶', '🎵'];
    for (let i = 0; i < 25; i++) {
        const note = document.createElement('div');
        note.classList.add('music-note-bg');
        note.textContent = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.top = Math.random() * 100 + 'vh';
        
        // Random font size for notes (much larger now: 25px to 65px)
        const fontSize = Math.random() * 40 + 25; 
        note.style.fontSize = fontSize + 'px';
        
        // Slower floating animation
        note.style.animationDuration = (Math.random() * 10 + 10) + 's';
        note.style.animationDelay = (Math.random() * 5) + 's';
        
        starsContainer.appendChild(note);
    }
}

// --- Initialization ---
function init() {
    createStars();
    loadState();
    applyTheme();
    generatePlaylistSequence();
    renderPlaylist();
    loadSong(state.playlistSequence[state.currentSongIndex]);
    
    // Simulate loading delay for splash screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        appContainer.classList.add('loaded');
        setTimeout(() => loadingScreen.style.display = 'none', 500);
    }, 1500);
}

// --- Local Storage ---
function loadState() {
    const saved = localStorage.getItem('musicPlayerState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.volume = parsed.volume ?? 100;
        state.favorites = parsed.favorites || [];
        state.recentlyPlayed = parsed.recentlyPlayed || [];
        state.theme = parsed.theme || 'dark';
        state.isShuffle = parsed.isShuffle || false;
        state.repeatMode = parsed.repeatMode || 'none';
        
        // Find last played song index
        if (parsed.lastPlayedId) {
            const idx = songs.findIndex(s => s.id === parsed.lastPlayedId);
            if (idx !== -1) state.currentSongIndex = idx;
        }
    }
    
    volumeSlider.value = state.volume;
    audio.volume = state.volume / 100;
    themeSwitch.checked = state.theme === 'dark';
    updateControlIcons();
}

function saveState() {
    const toSave = {
        volume: state.volume,
        favorites: state.favorites,
        recentlyPlayed: state.recentlyPlayed,
        theme: state.theme,
        isShuffle: state.isShuffle,
        repeatMode: state.repeatMode,
        lastPlayedId: songs[state.playlistSequence[state.currentSongIndex]]?.id
    };
    localStorage.setItem('musicPlayerState', JSON.stringify(toSave));
}

// --- Audio Player Logic ---
function generatePlaylistSequence() {
    state.playlistSequence = state.filteredSongs.map(s => songs.findIndex(orig => orig.id === s.id));
    if (state.isShuffle) {
        // Fisher-Yates shuffle
        for (let i = state.playlistSequence.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.playlistSequence[i], state.playlistSequence[j]] = [state.playlistSequence[j], state.playlistSequence[i]];
        }
    }
}

function updateDynamicBackground(song) {
    let hash = 0;
    const str = song.id + song.title;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const baseHue = Math.abs(hash) % 360;
    
    const h1 = baseHue;
    const h2 = (baseHue + 40) % 360;
    const h3 = (baseHue + 80) % 360;
    const h4 = (baseHue + 120) % 360;
    const h5 = (baseHue + 160) % 360;
    const h6 = (baseHue + 200) % 360;

    const gradient = `linear-gradient(-45deg, 
        hsl(${h1}, 80%, 10%), 
        hsl(${h2}, 70%, 15%), 
        hsl(${h3}, 80%, 25%), 
        hsl(${h4}, 90%, 35%), 
        hsl(${h5}, 100%, 30%), 
        hsl(${h6}, 80%, 10%))`;

    document.getElementById('dynamic-bg').style.backgroundImage = gradient;
}

function loadSong(songIndex) {
    if (songIndex === undefined || songIndex < 0) return;
    const song = songs[songIndex];
    
    audio.src = song.src;
    // Note: Since we don't have real files, we handle play errors gracefully.
    
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songCategory.textContent = song.category;
    coverImg.src = song.cover;
    
    // Check if favorite
    updateFavoriteIcon(song.id);
    
    // Load Lyrics (simulated fetch)
    loadLyrics(song);
    
    // Highlight in playlist
    updatePlaylistHighlight(song.id);
    
    // Add to recently played
    addToRecentlyPlayed(song.id);
    saveState();
}

function playSong() {
    state.isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    equalizer.classList.add('active');
    
    // Catch DOMException for missing file in dummy setup
    audio.play().catch(e => {
        console.warn('Audio playback failed (expected if local files are missing):', e);
        // Simulate playing state for UI demonstration
    });
    
    showToast(`Now Playing: ${songs[state.playlistSequence[state.currentSongIndex]].title}`);
}

function pauseSong() {
    state.isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    equalizer.classList.remove('active');
    audio.pause();
}

function togglePlay() {
    state.isPlaying ? pauseSong() : playSong();
}

function stopSong() {
    pauseSong();
    audio.currentTime = 0;
    updateProgress();
}

function nextSong() {
    let nextIndex = state.currentSongIndex + 1;
    if (nextIndex >= state.playlistSequence.length) {
        if (state.repeatMode === 'all') {
            nextIndex = 0;
        } else {
            stopSong();
            return;
        }
    }
    state.currentSongIndex = nextIndex;
    loadSong(state.playlistSequence[state.currentSongIndex]);
    if (state.isPlaying) playSong();
}

function prevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else {
        let prevIndex = state.currentSongIndex - 1;
        if (prevIndex < 0) {
            prevIndex = state.playlistSequence.length - 1;
        }
        state.currentSongIndex = prevIndex;
        loadSong(state.playlistSequence[state.currentSongIndex]);
        if (state.isPlaying) playSong();
    }
}

// --- Event Listeners: Controls ---
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
stopBtn.addEventListener('click', stopSong);

shuffleBtn.addEventListener('click', () => {
    state.isShuffle = !state.isShuffle;
    updateControlIcons();
    generatePlaylistSequence();
    state.currentSongIndex = 0; // reset to beginning of new sequence
    loadSong(state.playlistSequence[state.currentSongIndex]);
    showToast(state.isShuffle ? 'Shuffle Enabled' : 'Shuffle Disabled');
    saveState();
});

repeatBtn.addEventListener('click', () => {
    if (state.repeatMode === 'none') {
        state.repeatMode = 'all';
        showToast('Repeat All Enabled');
    } else if (state.repeatMode === 'all') {
        state.repeatMode = 'one';
        showToast('Repeat One Enabled');
    } else {
        state.repeatMode = 'none';
        showToast('Repeat Disabled');
    }
    updateControlIcons();
    saveState();
});

muteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    audio.muted = state.isMuted;
    muteBtn.innerHTML = state.isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
});

volumeSlider.addEventListener('input', (e) => {
    state.volume = e.target.value;
    audio.volume = state.volume / 100;
    if(state.volume == 0) muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    else muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    saveState();
});

volumeSlider.addEventListener('change', () => showToast(`Volume ${state.volume}%`));

// --- Progress Bar ---
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => {
    if (state.repeatMode === 'one') {
        audio.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
});

function updateProgress() {
    const { duration, currentTime } = audio;
    if (isNaN(duration)) return; // Prevents NaN output
    
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    currentTimeEl.textContent = formatTime(currentTime);
    totalDurationEl.textContent = formatTime(duration);
    
    // Simulate lyrics scroll
    if(state.isLyricsVisible) updateLyricsScroll(currentTime, duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

progressWrapper.addEventListener('click', (e) => {
    const width = progressWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (!isNaN(duration)) {
        audio.currentTime = (clickX / width) * duration;
    }
});

// Drag to seek
let isDragging = false;
progressWrapper.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = progressWrapper.getBoundingClientRect();
        let clickX = e.clientX - rect.left;
        if (clickX < 0) clickX = 0;
        if (clickX > rect.width) clickX = rect.width;
        
        if (!isNaN(audio.duration)) {
            audio.currentTime = (clickX / rect.width) * audio.duration;
        }
    }
});

// --- Playlist Management ---
function renderPlaylist() {
    playlistEl.innerHTML = '';
    if (state.filteredSongs.length === 0) {
        playlistEl.innerHTML = '<li style="padding: 20px; text-align: center; color: var(--text-muted)">No songs found.</li>';
        return;
    }
    
    state.filteredSongs.forEach(song => {
        const li = document.createElement('li');
        li.classList.add('playlist-item');
        li.dataset.id = song.id;
        
        li.innerHTML = `
            <div class="item-info">
                <img src="${song.cover}" alt="cover" class="item-img">
                <span class="item-title">${song.title}</span>
            </div>
            <div class="item-artist">${song.artist}</div>
            <div class="item-album">${song.album}</div>
            <div class="item-duration">${song.duration}</div>
        `;
        
        li.addEventListener('click', () => {
            // Find index in playlist sequence
            const originalIndex = songs.findIndex(s => s.id === song.id);
            const sequenceIndex = state.playlistSequence.indexOf(originalIndex);
            if (sequenceIndex !== -1) {
                state.currentSongIndex = sequenceIndex;
                loadSong(state.playlistSequence[state.currentSongIndex]);
                playSong();
            }
        });
        
        playlistEl.appendChild(li);
    });
    
    // Re-highlight if needed
    const currentSong = songs[state.playlistSequence[state.currentSongIndex]];
    if (currentSong) updatePlaylistHighlight(currentSong.id);
}

function updatePlaylistHighlight(songId) {
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.classList.remove('playing');
        if (item.dataset.id === songId) {
            item.classList.add('playing');
            // Scroll to element
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// --- Search and Filters ---
searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    filterSongs();
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        categoryItems.forEach(cat => cat.classList.remove('active'));
        item.classList.add('active');
        state.currentFilter = item.dataset.filter;
        filterSongs();
    });
});

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        categoryItems.forEach(cat => cat.classList.remove('active'));
        item.classList.add('active');
        state.currentFilter = `category:${item.dataset.category}`;
        filterSongs();
    });
});

function filterSongs() {
    let result = songs;
    
    // Apply View Filter
    if (state.currentFilter === 'favorites') {
        result = result.filter(s => state.favorites.includes(s.id));
        viewTitle.textContent = 'Favorites';
    } else if (state.currentFilter === 'recent') {
        result = result.filter(s => state.recentlyPlayed.includes(s.id));
        // Sort by recent order
        result.sort((a, b) => state.recentlyPlayed.indexOf(a.id) - state.recentlyPlayed.indexOf(b.id));
        viewTitle.textContent = 'Recently Played';
    } else if (state.currentFilter.startsWith('category:')) {
        const cat = state.currentFilter.split(':')[1];
        result = result.filter(s => s.category === cat);
        viewTitle.textContent = `${cat} Music`;
    } else {
        viewTitle.textContent = 'All Songs';
    }
    
    // Apply Search
    if (state.searchQuery) {
        result = result.filter(s => 
            s.title.toLowerCase().includes(state.searchQuery) ||
            s.artist.toLowerCase().includes(state.searchQuery) ||
            s.album.toLowerCase().includes(state.searchQuery)
        );
    }
    
    state.filteredSongs = result;
    generatePlaylistSequence();
    renderPlaylist();
}

// --- Favorites and Recent ---
favBtn.addEventListener('click', () => {
    const currentSong = songs[state.playlistSequence[state.currentSongIndex]];
    if (!currentSong) return;
    
    const index = state.favorites.indexOf(currentSong.id);
    if (index === -1) {
        state.favorites.push(currentSong.id);
        showToast('Added to Favorites ❤️');
    } else {
        state.favorites.splice(index, 1);
        showToast('Removed from Favorites');
    }
    
    updateFavoriteIcon(currentSong.id);
    saveState();
    
    // Update view if in favorites filter
    if (state.currentFilter === 'favorites') filterSongs();
});

function updateFavoriteIcon(songId) {
    if (state.favorites.includes(songId)) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
}

function addToRecentlyPlayed(songId) {
    const index = state.recentlyPlayed.indexOf(songId);
    if (index > -1) state.recentlyPlayed.splice(index, 1);
    state.recentlyPlayed.unshift(songId);
    // Keep only last 20
    if (state.recentlyPlayed.length > 20) state.recentlyPlayed.pop();
}

// --- UI Updates ---
function updateControlIcons() {
    shuffleBtn.classList.toggle('active-state', state.isShuffle);
    
    if (state.repeatMode === 'one') {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i><span style="position:absolute;font-size:0.5rem;top:2px;right:-2px">1</span>';
        repeatBtn.classList.add('active-state');
    } else if (state.repeatMode === 'all') {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
        repeatBtn.classList.add('active-state');
    } else {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
        repeatBtn.classList.remove('active-state');
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
}

themeSwitch.addEventListener('change', () => {
    state.theme = themeSwitch.checked ? 'dark' : 'light';
    applyTheme();
    showToast(`Theme Changed to ${state.theme === 'dark' ? 'Dark' : 'Light'}`);
    saveState();
});

// --- Lyrics ---
toggleLyricsBtn.addEventListener('click', () => {
    state.isLyricsVisible = !state.isLyricsVisible;
    if (state.isLyricsVisible) {
        lyricsContainer.classList.remove('hidden');
        playlistContainer.style.display = 'none';
        toggleLyricsBtn.classList.add('active-state');
    } else {
        lyricsContainer.classList.add('hidden');
        playlistContainer.style.display = 'flex';
        toggleLyricsBtn.classList.remove('active-state');
    }
});

function loadLyrics(song) {
    try {
        const lyricsText = (typeof lyricsDB !== 'undefined' && lyricsDB[song.id]) 
            ? lyricsDB[song.id] 
            : `[00:00.00] (Instrumental Intro)\n[00:15.00] (Music Playing...)\n[00:45.00] (Chorus)\n[01:15.00] (Vocals)\n[02:00.00] (Music Playing...)`;
            
        const lines = lyricsText.split('\n');
        lyricsContent.innerHTML = '';
        lines.forEach(line => {
            const match = line.match(/\[(\d{2}):(\d{2})\.\d{2}\]\s*(.*)/);
            if (match) {
                const min = parseInt(match[1]);
                const sec = parseInt(match[2]);
                const timeInSeconds = min * 60 + sec;
                const text = match[3];
                
                const p = document.createElement('p');
                p.textContent = text;
                p.dataset.time = timeInSeconds;
                lyricsContent.appendChild(p);
            } else if (line.trim() !== '') {
                const p = document.createElement('p');
                p.textContent = line;
                lyricsContent.appendChild(p);
            }
        });
    } catch (error) {
        lyricsContent.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">Oops, lyrics are currently unavailable for this track!</p>';
    }
}

function updateLyricsScroll(currentTime, duration) {
    const lines = lyricsContent.querySelectorAll('p[data-time]');
    let activeLine = null;
    
    lines.forEach(line => {
        if (currentTime >= parseFloat(line.dataset.time)) {
            activeLine = line;
        }
        line.classList.remove('active-line');
    });
    
    if (activeLine) {
        activeLine.classList.add('active-line');
        // Auto scroll
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// --- Toast Notifications ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Keyboard Shortcuts ---
document.addEventListener('keydown', (e) => {
    // Don't trigger if user is typing in search
    if (document.activeElement === searchInput) return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            prevSong();
            break;
        case 'ArrowRight':
            nextSong();
            break;
        case 'KeyM':
            muteBtn.click();
            break;
        case 'KeyS':
            shuffleBtn.click();
            break;
        case 'KeyR':
            repeatBtn.click();
            break;
        case 'KeyF':
            favBtn.click();
            break;
        case 'KeyL':
            toggleLyricsBtn.click();
            break;
        case 'KeyT':
            themeSwitch.click();
            break;
    }
});

// Boot app
init();
