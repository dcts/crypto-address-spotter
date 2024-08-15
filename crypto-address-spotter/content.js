const cryptoAddresses = {
  "account_rdx168qrzyngejus9nazhp7rw9z3qn2r7uk3ny89m5lwvl299ayv87vpn5": "TREASURY",
  "account_rdx169032xg7f4x4lunpwcxvset8ycchgj4hjhj96j6ffz48w5q5j93nv8": "radstakes",
  "account_rdx16xkfsag5qrnxsqdg6dq7jwr50tqslj2gkqzd7uunykeagk2e2zzqwm": "raddob",
  "account_rdx169ww69wpdau2lkz77y77dj30hhf99gyxjcnd2y25z9pddnycapkdxs": "FredLieb",
  "account_rdx169twf9y5zdaktuzah8ap2xwux33k47g437q3n9599hz3af44rjzuea": "RepServ",
  "account_rdx16xp98qnfs565mqk0es25t3e4fnd04rp8yqymw9tjs4faxnfzjrxmjv": "maelsar",
  "account_rdx1695d3e6ntce7gzaye2reevr22pu38rlt3xmwnwuh8960kyvaml2eqd": "FitzRock",
  "account_rdx169jltt7zwfvss70suk2pl4zxeg7uxtu2y6qn4005l4esy2as636lwk": "ironlady_xrd",
  "account_rdx168tedcjfs2lqmrt9j9htvhudwgc903l0r8nfprhn05tamqh7ehjkcy": "thegreatwork",
  "account_rdx16xqum6vt33y2xgxwzua3g5d33jktqlxkc22d2axyj30vgp9dwsphjm": "Eyup_xrd",
  "account_rdx169gfklhavs4ngl4sa0j23uk3jz9tamf0um37vjc2laq74z9gt0snsk": "Mansamusa1414",
  "account_rdx16xl8ugf4hzw92c9q2glremneep9jp8lqmcpctz5e5ggylcaunn989a": "haseeb_xrd",
  "account_rdx168ke9d2eqjp2za0tcpq54zx7slak2jqh7hu4gljj05fcsg4vsqycd2": "MatheusPiva",
  "account_rdx16y48jju82pac7yav302zt7x8s9gwln3rv98ctkcw7y8p8xagvk7gfj": "gagelberto",
  "account_rdx12y85y0p2v43x99sxvumfgja8ujpq9x2mrguamhp93h92pxagffh8a8": "ornitothedog",
  "account_rdx169crhs5x4wedftz0j3m6f060hcellvhauamp8mr0qkhyh2809p5pgz": "MFO1972",
  "account_rdx1688k6dlxm8n8gj0y2uhrr9vnhnqvk0vdfua4km7pzu2shqcll850kh": "AlAmeen_DeFi",
  "account_rdx168pankvk9ganx6fptuzemmmvgf0ph364y3hpara6k0v3r68mu8zjsy": "nadwebchain",
  "account_rdx16yzf5jpc3hfakzr0gtemw58unfktchlkrmgzk6t9w4nzp2al50cgqx": "GUI_ENGINEER",
  "account_rdx168rc5gjts93z685lnfnnxx4ajvk8vhryg4xlw9jl4x4xjq3hrsjunc": "Bamson_jnr",
  "account_rdx168rr6r00588uup7e2zds7sx3rettnja0wz50xxwee5q4rpnf924zc8": "cryptlexity",
  "account_rdx12xrtmrqdp6sg4cxxs6zkp64rc55qs7catmk83x5tjru9fzs0lst58e": "libertant",
  "account_rdx16y70z34ratrvqjml767nslcyvz3xveg8qnljyjyggl6mv3mjxghqqf": "marcosauglima71",
  "account_rdx168mqk33ap37dpl8xk3vxkywttrfvxz3kd0jn07p0le4at5ds7fwusl": "RoterHund",
  "account_rdx1289sd94p4tr80t52ng5daeh4sjnmgulwwpzrymvt9e26yvu6e2fcq9": "Jaimeodc",
  "account_rdx12x4lnlaek8ws5f3kr5rt2zmqa2mr623duhazclgkyq3wsuc0psr860": "rianmanhente",
  "account_rdx12xljv5fenzmnxxkulnze0rz7g432jszf7v327xx5lxw2xqaln5l08l": "nackjack",
  "account_rdx129ax5ds5kx6mslg7x4rtafe8yrm3nas836rahjun9k7c7j8mz4hn7x": "tiago.4104",
  "account_rdx16x8wx70wmakqa0ew9hnnpphkte5ypkydtpzhg3u84w8tjkpje3kvtp": "@HigoTexug0",
  "account_rdx16x0jqqvtcz2kn6slfy0yv2vzx363aexfuhse6d8yzdvpnsehhtnmqn": "Antonio",
  "account_rdx169deldhnkvufefr6n4q3xvkgn04ma7vqjtm0xpqhuq04wpuxe6j429": "@Gabriel_Machado96",
  "account_rdx129wvgummp07s8tdv9s43gj8z8qqely2l38dx994lv0uhmtx8dhkepf": "@yuki0301",
  "account_rdx12x7t3pjg4pl2a0vmmk8a84y7vav6wxmaxhu5mrhcd0m59duqu4q5x7": "@jpsouzajp",
  "account_rdx12xd6dy97k8k8jvank5a66thfe6a3nr6g0qntl3rgmav5vmpfzwdeef": "@danieljogos",
  "account_rdx12ydn4axz0gsjycfpvffgjlnktx2rmvpew8fhte7gvkrhhack7ee9nq": "leu1408",
  "account_rdx12xa0xkghv8qvwdwtthjcezun7f5zpr0f03xmc49w8gsj72937crvyg": "Reinaldo",
  "account_rdx129g6nk99rz2kdu76yuwgrylv55mmr3z23swwhu02ksu5tss8n7k542": "@Pourponikon",
  "account_rdx168k36e5u0aag77whtzjtuw6mlppwert4lrhue6gg8n22hfpsssg392": "WESLEY SILVA",
  "account_rdx1285t6csuhdpfwqw33k4wrkvdu6ddg6zec6lx5450enx9mdzwkl23wf": "giorgionchain",
  "account_rdx16ycdmaef2t8pvtpp2th8ynvdnk89j5934ft7zqe7n600y30f8f2ty2": "diegorohsler1",
  "account_rdx129cdc97reah8wyre8n65dz5dmwa587e7tpncvjxcjaawz54kj5k3lr": "@dcmotiondesign",
  "account_rdx128xwpxwy9vzl0jvdqnc7xpa9xqr8grxj97tuu92x239mxr52g84cw4": "@UDTSh",
  "account_rdx12yrsny5z77896ckv9ze3hdl8c0zcyvkh2ns0v6p33sjheqa8gssvw9": "@Dmiooto",
  "account_rdx12852en6h0f9yg85h3xs7gzqy08yshgxdthyy3z2mt5qwkx269tuy5v": "Rafael",
  "account_rdx169v9wkndnj706m8c2xc9r4jua8vh9cr9e3k30xzsz65xl52t7l6jak": "ronaldsfilm",
  "account_rdx1697a08na002wgt49j4wh3t0ywztws8wagchaxwq9qhgqme7yrr2uev": "31996686306",
  "account_rdx1296q38289uhnv3lfjpadx57smw5d08swpaa8n056gus3x7438dgqqz": "@HB0777",
  "account_rdx1280gng5gml3dn5gzju89rt0pqswsj6najs46vtjj85q7jcvnyupey8": "Jeffersonnsilva",
  "account_rdx129rkuwvf3h5tmzqpwvzvrms3kpq0w8t9ccq4evaeymyys0tsuu99je": "rapt00r",
  "account_rdx12yz0y55feuqwn9sa63hps909yz3q72guzz6rtxygnkv0jjtngxshqs": "Guilherme Lelis",
  "account_rdx1288cusx7lf6zq5zza4srfsmqfxzzr46n5gm7w0xxucgxg8ztqt5ufp": "@adbela",
  "account_rdx168wh0jqpgdyzajnqznzvje49edtx2gg9wdk49wptxar8lu9llz4sjk": "nemerous",
  "account_rdx168ydfsdh77sxhd4fgrtej8hkkefukgqga8xuh9vg3euc4eseqa6fap": "AndrePinheiroGuimaraes",
  "account_rdx16896af5ju92pkv2hfrc94wftx6a3r8smjt8xxxkwnu7juszd588uz6": "@faridoooh",
  "account_rdx1695v9rv2wcvj4yq98t45qntszzp5j2nsza3ur02merwlzqacn6mds6": "@Ravengar_Crypto",
  "account_rdx12x4x9z2735qtlu6de8ghfc40s4hcm89x0adyxdv8rvh9h5cxx7jvpm": "@EDGARD_GENESIS",
  "account_rdx16x2qawhaqdxguu7zykrnfd9uknu3r63mzc5wh36e0skscrhh58238g": "@Joe_emoteCare",
  "account_rdx12xma9z4p87aldnewj7pqce3ll7jqvlg5sm2uttrly4dyrh2pagfqgy": "vlima_tech",
  "account_rdx168yjyxepuu3xpraaww03h5wumayvzypfuw902ll0valauu93ka34gf": "Castelinho",
  "account_rdx16xkpvuyjjkd3xvn730fcy4mmtt504ugn8ce09zam4ccajtpgj6crzv": "@freitasbm16",
  "account_rdx12yxj0mzk989ge2cu4gx4del30squymfn2en8zj022ufl3dv5z0uacy": "@ti1982pg",
  "account_rdx16yrtrg3xlfrzjql2yzm8z7ry2enf04ztytncsp8r3w6e56zpyygwgw": "Davi Cardoso Aguiar de Melo",
  "account_rdx1687eylz9lqdssfmu6x596k07k0e2t7n8uhylyxnxwzl58dw62ja0d4": "jprimo0",
  "account_rdx168h2fenkq7mh699k64vmgzufag5fed6yc95vhv6sce937v30mmpdc6": "Vlado6",
  "account_rdx12ydpqn236f3r5xkufrkfgg5rkampu4esgkhc4qqpv5syx0f5w8cw2z": "renanahas",
  "account_rdx128dz4hhjs8mr3t0ke5wdhmene7zg0wn4zrujc4seqmngpcuxzy7lg3": "@AMiguelSCosta",
  "account_rdx128ke9te83eftdgjy362tjhmqe5vtj4ls52zqqk3gn6vvr6wrutcta8": "@anderso27686316",
  "account_rdx12xmhwwsuzcqapl8ywq6tccyqfc5hvp4esursx265d8cg7mqjcpwu7n": "@Riliwizzybackup",
  "account_rdx16y6qssn0s0dp30am47kte56lajmeahhmdpyhtcljclgqafkqxeldj4": "Francisco Alves",
  "account_rdx12xftxv98ujrg9ykavpvnv4d8uvehv4l4k8muntecwkndwfakjugy02": "@LeonardoAM21",
  "account_rdx128k5whskh5zjd0gx8kegu6tyv8p80u4emz0p233jt9rhux6vffjr8c": "Elenilza Costa",
  "account_rdx129dmayex5g5yvnvd2tvy6sexhcntp5gvr2emngwc7zfku82qwxdkzf": "@bpimenta",
  "account_rdx12ymtfd7pz92wceg805zgr9gwmnlmsgrtxjfex7frh4c5jsynx20xht": "@Aerobe123",
  "account_rdx129uyqkx3je6fxj0cecr2xm4gaek5y5ar0m0477zqanxmeancwjkx8d": "@Carlos111390",
  "account_rdx12yfd5gtmn3rjtclldjzj4saf2qsa9kg0qwrx4uusyemhktx5mzunrl": "ribeiro7777",
  "account_rdx12xdzusd772lkwwdaqz6dftnxl2kvmyvwmgxf6p70k30dapjgesmy94": "@Fablicio_Engineer",
  "account_rdx12y23wkzzp7xew8tjr4dnj0qjlcc8dk7kewqqje66fl0hva7tdzxx0y": "@mahasevapremaswaroopa",
  "account_rdx12ywe6kvell7flpxhmdv6f55t2a3759a82kg0n0cugu0fv5p6wl3ry5": "Balrog1979 / Lucas",
  "account_rdx12y52nv4lm3n0rgcas9gtless5zhrt5eahcwdmlv3ayehkwg3srzwp8": "RodrigoDPiva",
  "account_rdx128ynz2mz2z8yzhuv6p5uklrm42uy0vl5p8cjdqxq4tave6zehczzlr": "@Garcia2705",
  "account_rdx169k7mvw4069xuwalm256wkrtq73tjdmc7txvh2uty3qdn503s2f07s": "Jay XRD / @voe9e",
  "account_rdx12942fu6gpcngkf3hqz6wkj0ngffwkjuvm9y9efpuunav2m0dm9acd9": "@Daniel_Ezebio",
  "account_rdx12y762qcdajzd2a0yc8rzfttr8zq5z9c9cr3fyjfsnrkzv07m9ltw57": "@diegootomaz",
  "account_rdx12yv8y3kzckk3ws3fxdwkwlyva2ce3fmtpgla77x04dwuflaa5u6w0k": "@Tiagoalam",
  "account_rdx128nmv2n3m0hys9y7npsylslzfd0myajdsl0xl2mtd5fpvt79eeps22": "@LehAlmeida9",
  "account_rdx129vlgg902hdw4epavk45y3u6q3mlpmgzdrgkktelckv4wlevlw46ap": "@Marcelogpl",
  "account_rdx168anuw90x9y80jd4k8q2lu6srrvr2qvr8pdjmfdyfp97xhy0aseh8a": "@ohigornunes",
  "account_rdx169u5qrmwzhdygl4nedxtxzg9y0l6dq5dv9m7hmulk3nlm6824tet7x": "@MarineMasters",
  "account_rdx12y49h4kfw74c4399g6wsc5ldy9ray59ttv3qjd79n7mzq6pf800gmx": "@infornet_1",
  "account_rdx128j7ytfg2u7rkxv2cqgyw09agmy98qep3g4mw5ydzmk3fykrzszjl6": "@carloskemp",
  "account_rdx12xe0lnghfw3qfv6s5mksa05ywpvecxk6c9ths2mxgg0qh07duzysax": "@renatoanferreira",
  "account_rdx1289g0wzmrvvdttf8vka00l0x9fsxfclct305lqpzz755yxlaywpqut": "@Ronaldo35529075",
  "account_rdx129mxkflt7k3l03wl52jasrcmeqdwlnm4pcjv6vn5ysc4utl9j84d4e": "@nmmvieira",
  "account_rdx128klgwel8e2sl8kgxw4lqlwkguj05xssfqgcvd5zx3erpc4w7da0ja": "mrodriguez77",
  "account_rdx128kv6yrplwsrfdej3uxp37fyaqvhp4a9qnh33jl96jxwh397hphfzc": "imajinl",
  "account_rdx129lu29ukxrjjlc49rgn4tvtlvrkj8ms9jw4mzht2ynm9ysum790ne4": "@LeoNunes",
  "account_rdx129w5kyvd5uv69vx8rqkg4mvglyrrzdhzm4fnyxy5dlu0d57cyk4333": "@dex4ong",
  "account_rdx129w4j46ke5xzw9m94fws76246l4wqcp55dn4zzharux6cqdky4nj8v": "@bughunter22",
  "account_rdx128um67zexeh95jfur2wcuyv4ldk43p98ez0fk9lt4g8h9874lrdeky": "dctsdev",
  "account_rdx169pqp5xmch9um48wp9yv0ndar2waaxw6axfe7xyge4n7nk3c7xj42v": "@John101P",
  "account_rdx16yfxp4lv7c9ggsdhf2h4kp5mtnrwrpr4zpsy6ykv8s88k95gyn9s8m": "@PedroleaoXRD",
  "account_rdx128ws2r7fejd2ydrawrqzze8qq86sgrctm2a6qhesgewsx7cmxh27lg": "@AbidAbrar10",
  "account_rdx16x7s8d2eslgcq5aa93va6rehden776gendkyu70qxflavq2yla989r": "@jedidiassouza",
  "account_rdx12yvsmy5er9e35j0jadcv4ewtxx92slprg6chdx3hxe3ttwp2lhhs59": "josemacielfj",
  "account_rdx128yzzz8jus6jp6x90cutwyq3p0z74svkz9t4av37m8z0lsv3htqknu": "@olivinha",
  "account_rdx1289kp3wan60npgfxckepzkmwgwu7d83p5pldl8xcnw3f954f706jt2": "NO_NAME",
  "account_rdx129xvhzucqg5r7hkpw9m352uzzc2qpy5pfctgjnhmz530tcep933xpw": "@Mergesort960757",
  "account_rdx12xje0mavhpv6jau50lxuvs509f75zwv5ku0ezwpmre7zlj7xut2fyk": "Lizzli0x",
  "account_rdx12x0kk9u6ns8a8a8g6q739sngvsflk2jg5xrjwytxup6vq0pntxa9sx": "@Captain_Sarah",
  "account_rdx128tp2fqh2sxnmulsghhc9t73zht396v7a6srhvj7hpkt0n84enjh8t": "shiny_dev",
  "account_rdx12yg3a3g2r7y2jjxvtuhh32kfaqamxke68wutdn0r4yx026s92r0k7k": "@anon1719",
  "account_rdx12y228va22qdkz98c58y5zp6g58tqnrpc8gtuh404mewqgeqr234hvn": "siegfriedb24",
  "account_rdx12xadjzx3d739hys7l42e0mphjym0cnacfs330k54w0f8qytre02r4c": "msaida",
  "account_rdx129tg6qxdyz08q9sejkuzjue8zs8ghnn4ecv7u69pwt2scplm9jrhxq": "@Velez_r10",
  "account_rdx16y5a3q50ym8p5suf2zu0q7362syn8yuzlrek9t4uyj5kqn8h0xyw9u": "stefano_ferraro",
  "account_rdx169za50c9wyty0k20vlschdu8frmtm6jnacdjm40q7rgk874quepggm": "kafkafrate",
  "account_rdx16xngqld7v3t0k4zayswupz4jcpf39t6vmxpd6tz0svnvd09scx7nt5": "EvgeniiaVak",
  "account_rdx16xsmh8ykr62hjtymekgynlgjrtl892lwex7x2k2hvc9755x9hur623": "Blockchain_Sail",
  "account_rdx169wmrcer4zzgrndvkfr5fspm6s2t7cuuad9l2gqdzq397rsu3n2dyd": "aus87",
  "account_rdx16x9ff4lc7emfvqqfzqt983htzzjpvhj9tllqe8sfmxkvl4mntur3xp": "SmashinBumpkin",
  "account_rdx169xwjd8acwjj2p5an4mj8ee3rcuzfhfyqwfgz2xsjpmvwxl99jjmx3": "Andre090904",
  "account_rdx168fq6akfksjqvax6jk7vsnas3aql6m8f724pjurlc0klfhnw2tg0qu": "htomee22",
  "account_rdx168088lrcxv8psy407hyk4atu3s83wa2l4ag5gsa8hdw46f9jzyfss8": "rosopond",
  "account_rdx1694ullvfs94thnzrl6dplw3mxw5dyalsdv978t74ycp6zwayecenw5": "ArthurQuantize",
  "account_rdx1694x25gphs906pq9gl44w723t8gc9n8qfqcze3xas5taf4stvaaqh7": "shahzaibak",
  "account_rdx16ymm32rcva0jna83tmnazy9s0wylh4avqnd0hw9ct0kkrzdr7xs0u5": "MxrixM0"
};

(async function() {
  const annotations = new Map(); // To keep track of annotations by suffix
  let isEnabled = true; // Default to enabled
  let intervalId; // Store the interval ID
  
  // Function to toggle the script based on user preference
  function toggleScript() {
    if (isEnabled) {
      scanAndAnnotate();
      intervalId = setInterval(scanAndAnnotate, 5000); // Continue running every 5 seconds
    } else {
      clearInterval(intervalId); // Stop the script from running

      // Remove all annotations from the page
      annotations.forEach((suffixes, node) => {
        suffixes.forEach((suffix) => {
          const address = Object.keys(cryptoAddresses).find((addr) =>
            addr.endsWith(suffix)
          );
          const name = cryptoAddresses[address];

          if (name) {
            // Remove the annotation span by finding it based on its text content
            const annotationSpans = Array.from(
              node.parentNode.querySelectorAll("span")
            );
            annotationSpans.forEach((span) => {
              if (span.textContent.includes(name)) {
                span.remove(); // Remove the annotation
              }
            });
          }
        });
      });
      annotations.clear(); // Clear the annotations map
    }
  }

  function scanAndAnnotate() {
    // Get the last 5 characters of each address
    const addressSuffixes = Object.keys(cryptoAddresses).map((addr) =>
      addr.slice(-5)
    );

    // Iterate over all text nodes in the document
    const treeWalker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let node;

    while ((node = treeWalker.nextNode())) {
      addressSuffixes.forEach((suffix) => {
        if (node.nodeValue.includes(suffix)) {
          // Get the associated name for this suffix
          const address = Object.keys(cryptoAddresses).find((addr) =>
            addr.endsWith(suffix)
          );
          const name = cryptoAddresses[address];

          if (name) {
            // Check if an annotation has already been added for this suffix in this node
            if (
              !annotations.has(node) ||
              !annotations.get(node).includes(suffix)
            ) {
              // Create a new element for the name annotation
              const annotation = document.createElement("span");
              annotation.textContent = ` (${name})`;
              annotation.style.position = "absolute";
              annotation.style.backgroundColor = "yellow"; // Optional: to make it visible

              // Insert the annotation next to the found text
              const parent = node.parentNode;
              const range = document.createRange();
              const textPosition =
                node.nodeValue.indexOf(suffix) + suffix.length;
              range.setStart(node, textPosition);
              range.setEnd(node, textPosition);

              // Get the bounding rect and parent element position
              const rect = range.getBoundingClientRect();
              const parentRect = parent.getBoundingClientRect();

              // Calculate absolute position within the parent element
              annotation.style.left = `${
                rect.left - parentRect.left + window.scrollX
              }px`;
              annotation.style.top = `${
                rect.top - parentRect.top + window.scrollY
              }px`;

              // Make sure the annotation is within the parent's coordinate system
              parent.style.position = "relative";
              annotation.style.zIndex = "9999";

              // Append the annotation and track it
              parent.appendChild(annotation);
              if (!annotations.has(node)) {
                annotations.set(node, []);
              }
              annotations.get(node).push(suffix);
            }
          }
        }
      });
    }

    // Clean up annotations that are no longer needed or visible
    annotations.forEach((suffixes, node) => {
      suffixes.forEach((suffix) => {
        const address = Object.keys(cryptoAddresses).find((addr) =>
          addr.endsWith(suffix)
        );
        const name = cryptoAddresses[address];

        if (name) {
          const annotation = node.parentNode.querySelector(
            `span:contains('${name}')`
          );
          if (annotation && !isInViewport(annotation)) {
            annotation.remove();
            annotations
              .get(node)
              .splice(annotations.get(node).indexOf(suffix), 1);
            if (annotations.get(node).length === 0) {
              annotations.delete(node);
            }
          }
        }
      });
    });
  }

  // Utility function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Listen for messages from the popup to toggle the script
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.scriptEnabled !== undefined) {
      isEnabled = request.scriptEnabled;
      toggleScript();
    }
  });

  // Initialize the script based on the stored setting
  chrome.storage.sync.get(["scriptEnabled"], function (result) {
    isEnabled = result.scriptEnabled !== false; // Default to true if not set
    toggleScript();
  });

  // // Run the function immediately and then every 5 seconds
  // scanAndAnnotate();
  // setInterval(scanAndAnnotate, 1000);
})();
