'use strict';

const siteTypes = {
  corporate: {
    label: 'コーポレートサイト',
    direction: '企業の事業内容・価値・専門性を伝え、初めて訪れるユーザーにも信頼感を与える。ファーストビューで企業の立ち位置を端的に示し、事業理解、強み、実績、会社情報、問い合わせへ自然につなげる。',
  },
  service: {
    label: 'サービスサイト',
    direction: 'サービスが解決する課題と得られる価値を明確にし、利用場面、特徴、選ばれる理由、導入への不安解消を順序立てて伝える。',
  },
  landing: {
    label: 'ランディングページ',
    direction: 'ひとつの目的に集中し、ベネフィット、根拠、不安解消、CTAが一本のストーリーとしてつながる構成にする。',
  },
  shop: {
    label: '店舗・施設サイト',
    direction: '空間や体験の魅力、提供内容、場所、営業時間、利用方法を迷いなく把握でき、来店・来館への期待と安心を育てる。',
  },
  recruitment: {
    label: '採用サイト',
    direction: '仕事の意義、組織の価値観、働く人、環境、募集要項を一貫したストーリーで伝え、応募前の疑問を解消する。',
  },
  portfolio: {
    label: 'ポートフォリオ',
    direction: '作品や実績を主役にしながら、背景にある考え方、役割、成果、人となりが伝わり、相談や評価につながる構成にする。',
  },
  ecommerce: {
    label: 'ECサイト',
    direction: '商品の魅力と違いを比較しやすく提示し、発見から検討、購入までの迷いと負担を減らす。安心材料と購入条件も適切な位置で示す。',
  },
  media: {
    label: 'メディア・ブログ',
    direction: '読みたい情報を見つけやすく、本文へ集中でき、関連記事へ自然に回遊できる情報構造にする。更新性と読みやすさを両立する。',
  },
  event: {
    label: 'イベントサイト',
    direction: 'イベントの価値、日時・場所、内容、参加対象、申込方法を短時間で理解でき、期待感を保ったまま参加判断へ進める。',
  },
  other: {
    label: 'その他のWebサイト',
    direction: 'サイト固有の目的と利用者の行動を起点に、必要な情報と導線を過不足なく設計する。',
  },
};

const industries = {
  professional: {
    label: '士業・専門サービス',
    audience: '専門家への相談先を比較検討している個人・法人の意思決定者',
    traits: '専門性と信頼性を軸に、対応領域、実績、相談の流れ、担当者の人柄を分かりやすく示す。',
    avoid: '権威的すぎる表現や、相談のハードルを上げる堅苦しい見せ方を避ける。',
  },
  it: {
    label: 'IT・テクノロジー',
    audience: '業務課題の解決策や導入先を探している担当者・責任者',
    traits: '技術力・課題解決力・先進性を、具体的な利用価値や導入効果と結びつけて示す。',
    avoid: '抽象的な技術用語や未来感の演出だけで、提供価値を曖昧にしない。',
  },
  construction: {
    label: '建築・建設・不動産',
    audience: '施工・設計・物件の品質と依頼先の信頼性を比較している人',
    traits: '実績・品質・安心感・空間表現を重視し、施工・設計写真を重要なコンテンツとして扱う。',
    avoid: '写真の魅力を小さなカードや過度な装飾で弱めない。',
  },
  manufacturing: {
    label: '製造業',
    audience: '技術力、品質、供給体制を確認して取引先を検討する担当者',
    traits: '技術、品質、対応力を具体的な製品・工程・実績とともに提示する。',
    avoid: '抽象的なスローガンだけで技術的な強みを説明しない。',
  },
  medical: {
    label: '医療・福祉',
    audience: '安心して受診・相談・利用できる場所を探している本人や家族',
    traits: '安心感、清潔感、情報の正確さ、利用しやすさを最優先し、診療・支援内容や利用手順を明快にする。',
    avoid: '不安を煽る表現、誇大な効能表現、読みにくい装飾を避ける。',
  },
  beauty: {
    label: '美容・ウェルネス',
    audience: '自分に合う施術・サービスと信頼できる提供者を探している人',
    traits: '理想の体験や変化を想像できるビジュアルと、施術内容、価格、安心材料を両立する。',
    avoid: '根拠のない効果表現や、情報を隠すほど雰囲気に偏った見せ方を避ける。',
  },
  restaurant: {
    label: '飲食・食品',
    audience: '味、雰囲気、価格、場所を確かめて利用・購入を検討する人',
    traits: '料理や商品の魅力が伝わる写真を中心に、メニュー、こだわり、利用情報を分かりやすく伝える。',
    avoid: '写真の品質を損なう加工や、営業時間・価格を見つけにくくする構成を避ける。',
  },
  education: {
    label: '教育・スクール',
    audience: '学びの効果、内容、環境を比較する受講者または保護者',
    traits: '学べる内容、成長の過程、指導者、実績、安心して始められる仕組みを具体化する。',
    avoid: '成果を過度に約束したり、対象者に合わない幼すぎる表現へ寄せない。',
  },
  retail: {
    label: '小売・店舗',
    audience: '商品、品揃え、店舗体験に魅力を感じて購入・来店を検討する人',
    traits: '商品の個性と選ぶ楽しさを伝えながら、価格、在庫、店舗情報への導線を明確にする。',
    avoid: '情報過多で商品同士の違いを埋もれさせない。',
  },
  finance: {
    label: '金融・保険',
    audience: '大切な資産や将来に関する選択肢を慎重に比較する個人・法人',
    traits: '信頼性、透明性、正確さを優先し、複雑な条件や手続きを段階的に理解できるようにする。',
    avoid: '軽率な印象の演出や、リスク・条件が見えにくい訴求を避ける。',
  },
  creative: {
    label: 'デザイン・クリエイティブ',
    audience: '表現力、実績、考え方、相性を見て依頼先を選ぶ担当者',
    traits: '制作物の視覚的な魅力と、課題への向き合い方、プロセス、成果を一体で見せる。',
    avoid: '個性の演出で作品の閲覧性や問い合わせ導線を損なわない。',
  },
  nonprofit: {
    label: '公共・団体・NPO',
    audience: '活動内容を知り、利用、参加、支援を検討する市民や関係者',
    traits: '活動目的、社会的意義、実績、参加方法を透明性高く伝え、多様な利用者が情報へ到達できるようにする。',
    avoid: '内輪向けの用語や、必要な情報へたどり着きにくい演出を避ける。',
  },
  other: {
    label: 'その他の業種',
    audience: '提供内容を理解し、自分に適しているか判断したい人',
    traits: '業種固有の信頼材料と、利用者が比較・判断するための情報を整理する。',
    avoid: '業種との必然性がない定型的な表現を避ける。',
  },
};

const goals = {
  trust: { label: '信頼してもらう', text: '過度なセールス表現に頼らず、実績、専門性、人物・企業情報を適切に配置し、安心感と信頼を形成する。' },
  inquiry: { label: '問い合わせを増やす', text: '問い合わせボタンを目立たせるだけでなく、価値や違いを理解・納得したうえで自然に問い合わせへ進める情報設計にする。' },
  understand: { label: '商品・サービスを理解してもらう', text: '利用者の課題、提供価値、仕組み、特徴、利用後の状態を順序立て、短時間でも全体像を理解できるようにする。' },
  branding: { label: 'ブランドイメージを伝える', text: '情報整理だけでなく、タイポグラフィ、写真、余白、色、レイアウトを通じてブランドの世界観を一貫して表現する。' },
  recruitment: { label: '採用につなげる', text: '仕事の実像、組織の価値観、働く人、成長機会を具体的に示し、候補者が自分との相性を判断したうえで応募できるようにする。' },
  purchase: { label: '商品を購入してもらう', text: '商品の価値、違い、価格、利用イメージ、安心材料を比較しやすく示し、購入までの迷いと操作負担を減らす。' },
  visit: { label: '店舗・施設への来訪につなげる', text: '訪れる価値と体験を伝え、場所、営業時間、利用条件、アクセスなど来訪前の不安を解消する。' },
  reservation: { label: '予約につなげる', text: 'サービス内容、担当者、料金、空き状況など予約判断に必要な情報を整え、予約手続きを短く明快にする。' },
  reading: { label: 'コンテンツを読んでもらう', text: '関心に合う記事を見つけやすくし、本文の可読性と回遊性を高め、継続して読みたくなる体験をつくる。' },
  other: { label: 'サイト固有の目的を達成する', text: '想定ユーザーが必要な情報を理解し、サイト固有の主要行動へ迷わず進めるようにする。' },
};

const deliverables = {
  image: 'モックアップ画像',
  brief: 'デザイン方針・ページ構成',
  prototype: 'HTML/CSSプロトタイプ',
};

const generateLabels = {
  image: '画像生成用プロンプトを作る',
  brief: 'デザインBriefを生成',
  prototype: '実装用プロンプトを生成',
};

const mockupScopes = {
  set: {
    label: '上部・中部・下部の3分割セット',
    framing: [],
    indices: [],
  },
  key: {
    label: 'ファーストビュー＋主要セクション',
    framing: [
      'デスクトップWebサイトのファーストビューと、その直後に続く主要セクションだけを正面から描画する。',
      '縦長の1枚に、ヘッダー・ファーストビュー・主要情報2セクション・CTAの合計4ブロックを収める。',
      'ページの全内容を網羅しようとせず、デザインの方向性が伝わる代表範囲に絞る。',
    ],
    indices: [0, 1, 2, 5],
  },
  hero: {
    label: 'ファーストビューのみ',
    framing: [
      'デスクトップWebサイトのヘッダーとファーストビューだけを、正面から見た横長の1枚として描画する。',
      '画面下端に次のセクションを詰め込まず、ファーストビューの構図、文字、CTA、余白を十分に見せる。',
    ],
    indices: [0],
  },
  full: {
    label: 'フルページ概要',
    framing: [
      'デスクトップWebサイトの全体像を、正面から見た縦長の1枚として描画する。',
      'ヘッダーから最終CTAまでを最大5セクションで構成し、細かな情報を網羅するのではなく、主要な構成と視覚的なリズムを示す。',
      '下部を収めるために文字や余白を縮小してはならない。収まらない場合は補助的な内容を省略する。',
    ],
    indices: [0, 1, 2, 4, 5],
  },
  top: {
    label: 'ページ上部',
    framing: [
      'デスクトップWebサイトのページ上部だけを、正面から見た縦長の1枚として描画する。',
      'ヘッダー・ファーストビュー・導入・最初の主要セクションまでに限定し、ページ全体は描かない。',
    ],
    indices: [0, 1, 2],
  },
  middle: {
    label: 'ページ中部',
    framing: [
      '同じWebサイトのページ中部を切り出したデスクトップ表示として、正面から描画する。',
      'ファーストビューやフッターを追加せず、主要情報、根拠、比較・判断材料のセクションに限定する。',
    ],
    indices: [1, 2, 3],
  },
  bottom: {
    label: 'ページ下部',
    framing: [
      '同じWebサイトのページ下部を切り出したデスクトップ表示として、正面から描画する。',
      'ファーストビューを繰り返さず、判断材料、信頼材料、最終CTA、フッターに限定する。',
    ],
    indices: [3, 4, 5],
  },
};

const pageStructures = {
  corporate: ['企業の立ち位置と提供価値を示すヘッダー・ファーストビュー', '事業内容を理解するための導入', '強みと、その根拠となる実績・取り組み', '事例または顧客が判断するための具体情報', '企業・人物の信頼材料', '次の行動へつなぐ案内'],
  service: ['サービスの対象者と提供価値を示すファーストビュー', '利用者が抱える課題の整理', 'サービスの仕組み・特徴・利用場面', '選ばれる理由とその根拠', '導入・利用前の不安解消', '次の行動へつなぐ案内'],
  landing: ['対象者・ベネフィット・主要行動を絞ったファーストビュー', '課題への共感と問題の明確化', '解決策と得られる変化', '特徴・根拠・比較材料', '利用者の不安や疑問の解消', '決断を後押しする最終案内'],
  shop: ['店舗・施設の体験価値と基本情報を示すファーストビュー', '提供する商品・サービス・過ごし方', '空間やスタッフの魅力', '選ばれる理由や利用者の声', '営業時間・場所・利用方法', '予約・来店へつなぐ案内'],
  recruitment: ['仕事の意義と求める人物像を示すファーストビュー', '事業と組織が目指すこと', '仕事・職種・プロジェクトの実像', '働く人と組織文化', '環境・制度・成長機会', '募集要項と応募への案内'],
  portfolio: ['制作者の専門領域と代表的な仕事を示すファーストビュー', '厳選した実績・作品', '各プロジェクトの背景・役割・成果', '制作姿勢と得意領域', 'プロフィール・信頼材料', '相談・問い合わせへの案内'],
  ecommerce: ['商品価値と主要カテゴリを示すファーストビュー', '注目商品または選び方の入口', '商品の違いが分かる一覧・比較', '品質・素材・利用場面の説明', '配送・返品・購入時の安心材料', '購入または商品探索への導線'],
  media: ['媒体のテーマと注目コンテンツを示すファーストビュー', '新着または重要記事', '関心別に探せるカテゴリ導線', '編集方針や専門性が伝わる特集', '関連記事への回遊導線', '継続閲覧・購読への案内'],
  event: ['イベントの価値・日時・場所を示すファーストビュー', '参加すると得られる体験', 'プログラム・登壇者・見どころ', '対象者と参加判断の材料', '会場・日時・注意事項', '申込への案内'],
  other: ['目的と対象者を明示するファーストビュー', '利用者の疑問を整理する導入', '提供内容または主要情報', '選択・判断の根拠', '不安や疑問の解消', '主要行動への案内'],
};

const audienceLabels = {
  business: '法人の担当者・責任者',
  consumer: '一般消費者',
  owner: '経営者・事業主',
  family: '家族・保護者',
  jobseeker: '求職者',
};

const impressions = {
  trust: { label: '信頼感', text: '読みやすく安定感のあるタイポグラフィ、整ったグリッド、明確な情報階層、一貫性を重視し、過度な装飾を避ける。' },
  sincere: { label: '誠実', text: '情報を率直に示し、落ち着いた文字組みと整然とした配置で、実直さと透明性を表現する。' },
  friendly: { label: '親しみ', text: '堅すぎない文字組み、柔らかな余白、自然な写真表現、必要に応じた穏やかな形状によって、話しかけやすさをつくる。' },
  calm: { label: '落ち着き', text: '抑制した配色、安定した構図、ゆとりある行間と余白で、静かに情報を受け取れる状態をつくる。' },
  intelligent: { label: '知的', text: '論理的な情報階層、精度のあるタイポグラフィ、端正なグリッドで、思考の明快さを感じさせる。' },
  sophisticated: { label: '洗練', text: '要素を丁寧に選び、余白、文字、写真の比率を整え、流行の装飾に頼らない完成度を目指す。' },
  luxury: { label: '高級感', text: '上質な写真、抑制した色数、広い余白、繊細なタイポグラフィによって品格を表現し、金色や装飾だけに依存しない。' },
  innovative: { label: '先進的', text: '新しさを感じるレイアウト、現代的な情報構造とタイポグラフィ、適度なインタラクションで表現し、過剰な発光や意味のない3Dに頼らない。' },
  active: { label: '活発', text: '明快なコントラスト、視線が流れる構図、リズムのあるタイポグラフィで動きを生み、情報量を無闇に増やさない。' },
  strong: { label: '力強い', text: '大胆な文字のスケール、明確なコントラスト、芯のある構図で意志を表現し、威圧感は避ける。' },
  soft: { label: 'やわらかい', text: '低刺激な色の関係、呼吸感のある余白、穏やかな写真や形状を使い、可読性を保ちながら緊張を和らげる。' },
  natural: { label: 'ナチュラル', text: '自然光を感じる写真、素材感、落ち着いた色の関係、不均一さを適度に取り入れ、作り込みすぎない魅力を出す。' },
  minimal: { label: 'ミニマル', text: '十分な余白を確保し、要素数と色数を抑え、タイポグラフィを主要なデザイン要素として扱い、装飾目的だけのUIを避ける。' },
  elegant: { label: 'エレガント', text: '繊細な文字組み、滑らかな余白のリズム、節度あるコントラストで優美さをつくり、華美にしすぎない。' },
  unique: { label: '個性的', text: 'ブランドや内容に由来する独自の構図、文字、写真の扱いをつくり、奇抜さだけを目的にしない。' },
};

const optionDetails = {
  color: {
    auto: '業種、目的、想定ユーザー、コンセプトから必然性のある配色を判断する。',
    navy: 'ネイビーを基調に、信頼性と可読性を保つ限定的なアクセントカラーを組み合わせる。',
    monochrome: 'モノクロを基調に、明度差とタイポグラフィで階層をつくる。必要な操作箇所だけ明確なアクセントを使う。',
    warm: '暖色を軸に、温かさと視認性を両立する。色の面積と彩度を調整し、画面全体が騒がしくならないようにする。',
    cool: '寒色を軸に、清潔感や知性を表現する。冷たくなりすぎないよう写真や余白との関係を整える。',
    earth: '自然を想起する落ち着いた色を使い、素材感や写真と調和させる。くすませすぎてコントラストを失わない。',
    vivid: '鮮やかな色は要点と行動の強調に絞り、背景や本文は落ち着かせて視覚的な優先順位を守る。',
  },
  style: {
    auto: '業種と目的に適したスタイルを判断し、既成テンプレートの雰囲気をそのまま当てはめない。',
    minimal: '要素を厳選し、余白、比率、文字の強弱を中心に構成する。情報不足に見えないよう必要な根拠は残す。',
    modern: '現代的な文字組み、明快なグリッド、適度な非対称性で新鮮さをつくる。流行表現の寄せ集めにしない。',
    editorial: '見出し、本文、写真、余白の編集的なリズムを活かし、読み進める体験に変化をつける。',
    japanese: '静けさ、間、素材感、端正な文字組みを取り入れ、表層的な和柄の多用を避ける。',
    luxury: '上質な写真と余白、繊細なタイポグラフィで品格をつくり、装飾や金色に頼りすぎない。',
    playful: '色、形、文字のリズムで楽しさを表現しながら、情報の優先順位と操作の分かりやすさを守る。',
  },
  spacing: {
    auto: '業種、目的、コンテンツ量、想定ユーザーに合わせて、読みやすさと情報密度のバランスがよい余白を判断する。',
    spacious: 'セクション間、要素間、文字まわりの余白を広めに取り、ゆったりと落ち着いて内容を受け取れる構成にする。ただし、関連情報が分断されないようまとまりは保つ。',
    balanced: '十分な呼吸感を確保しながら、一画面で把握できる情報量とのバランスを取る。広すぎる余白や窮屈な詰め込みを避ける。',
    compact: '余白を控えめにして情報を効率よく確認できる構成にする。ただし、行間、タップ領域、情報グループ間の区切りは確保し、窮屈さや誤操作を生まない。',
  },
  visual: {
    auto: '業種と目的にとって最も説得力のある写真・図版の役割と量を判断する。',
    photo: '写真を主要な表現として扱い、内容を具体化する実在感のある写真を選ぶ。装飾的なストック写真で埋めない。',
    people: '利用者やスタッフの自然な表情・関係性が伝わる人物写真を中心にし、過度に演出された素材を避ける。',
    product: '商品・サービスの特徴、使われ方、細部が分かる写真を中心にし、判断材料として機能させる。',
    illustration: '内容の理解や世界観の形成に役立つ一貫したイラストを使い、余白を埋めるだけの装飾にしない。',
    none: '写真・イラストには頼らず、タイポグラフィ、余白、色面、罫線、レイアウトで視覚的な魅力と階層をつくる。',
  },
  animation: {
    auto: '理解や操作を助ける場面に限って動きを使い、業種と想定ユーザーに合う強度を判断する。',
    none: '演出的なアニメーションは使用せず、静的な画面でも情報のリズムと状態変化が明確に伝わるようにする。',
    subtle: 'フェードや移動は短く控えめにし、状態変化や視線誘導を補助する範囲で使う。',
    interactive: '操作への反応やスクロール連動を体験価値につながる範囲で使い、操作を妨げず、動きを減らす設定にも対応する。',
  },
};

const combinationRules = [
  { industry: 'professional', impression: 'friendly', text: '専門サービスとしての信頼性を損なわない範囲で、人物写真、柔らかな余白、自然な配色により相談しやすさを表現する。ポップすぎる色彩や装飾へ寄せない。' },
  { industry: 'it', impression: 'innovative', text: '先進性は過剰なグラデーション、発光表現、意味のない3Dだけに頼らず、情報構造、余白、タイポグラフィ、適度なインタラクションで表現する。' },
  { industry: 'medical', impression: 'luxury', text: '高級感を優先しすぎて、安心感、清潔感、分かりやすさを損なわない。' },
  { industry: 'construction', impression: 'minimal', text: 'ミニマルにしすぎて実績や空間の魅力が弱くならないよう、施工・設計写真には十分な存在感を持たせる。' },
];

const impressionPairRules = [
  { pair: ['minimal', 'active'], text: 'ミニマルさと活発さは、装飾を増やすのではなく、大胆な余白、文字サイズ、非対称構図、視線誘導によって両立する。' },
  { pair: ['luxury', 'friendly'], text: '高級感と親しみは、威圧的・閉鎖的な表現を避け、上質さを素材感・写真・余白で、親しみを人物感や言葉の温度で表現する。' },
  { pair: ['strong', 'elegant'], text: '力強さとエレガントさは、色や装飾を増やさず、タイポグラフィのスケールと端正なレイアウトでコントラストをつくる。' },
];

const qualityRules = [
  '情報には明確な視覚階層を持たせる。',
  '余白を重要なデザイン要素として扱う。',
  'タイポグラフィの役割を整理する。',
  '必要以上に多くの色を使用しない。',
  '装飾のためだけの要素を増やさない。',
  'すべてのセクションを同じカードUIで構成しない。',
  'ページ全体に視覚的なリズムを持たせる。',
  '業種や目的から必然性のあるデザインにする。',
  'テンプレートをそのまま当てはめたような見た目を避ける。',
  'スマートフォンでも情報階層を維持する。',
  '十分なコントラスト、可読性、操作性を確保する。',
];

const antiTemplateRules = [
  'Hero直下に3〜4枚の同型カードを並べるだけの構成へ安易に寄せない。',
  'Hero / Features / About / CTA のような定型構成を機械的に適用しない。',
  '意味のない英語ラベルや装飾的なバッジを追加しない。',
  '根拠のない実績値や数値を生成しない。',
  '不要なグラデーション、意味のない3D、装飾目的の発光表現に依存しない。',
  '同じ角丸カードをページ全体へ大量配置しない。',
];

let selectedImpressions = [];
let elements = {};

document.addEventListener('DOMContentLoaded', init);

function init() {
  elements = {
    form: document.getElementById('prompt-form'),
    siteType: document.getElementById('site-type'),
    industry: document.getElementById('industry'),
    industryDetail: document.getElementById('industry-detail'),
    goal: document.getElementById('goal'),
    audience: document.getElementById('audience'),
    audienceDetail: document.getElementById('audience-detail'),
    audienceCustomField: document.getElementById('audience-custom-field'),
    deliverable: document.getElementById('deliverable'),
    mockupScope: document.getElementById('mockup-scope'),
    mockupScopeField: document.getElementById('mockup-scope-field'),
    generateLabel: document.getElementById('generate-label'),
    chips: Array.from(document.querySelectorAll('.chip')),
    impressionCount: document.getElementById('impression-count'),
    impressionMessage: document.getElementById('impression-message'),
    color: document.getElementById('color'),
    style: document.getElementById('style'),
    spacing: document.getElementById('spacing'),
    visual: document.getElementById('visual'),
    animation: document.getElementById('animation'),
    avoid: document.getElementById('avoid'),
    request: document.getElementById('request'),
    status: document.getElementById('form-status'),
    resultPanel: document.querySelector('.result-panel'),
    singleResult: document.getElementById('single-result'),
    splitResults: document.getElementById('split-results'),
    output: document.getElementById('prompt-output'),
    copyButton: document.getElementById('copy-button'),
    copyLabel: document.getElementById('copy-label'),
    characterCount: document.getElementById('character-count'),
    emptyDecoration: document.getElementById('empty-decoration'),
    partOutputs: Array.from(document.querySelectorAll('.part-output')),
    partCopyButtons: Array.from(document.querySelectorAll('.part-copy-button')),
    partCharacterCounts: Array.from(document.querySelectorAll('.part-character-count')),
  };

  if (!elements.form || !elements.output) return;

  elements.form.addEventListener('submit', handleGenerate);
  elements.form.addEventListener('reset', handleReset);
  elements.audience.addEventListener('change', handleAudienceChange);
  elements.deliverable.addEventListener('change', updateGenerateLabel);
  elements.mockupScope.addEventListener('change', updateResultMode);
  elements.copyButton.addEventListener('click', handleCopy);
  elements.output.addEventListener('input', updateOutputState);
  elements.partOutputs.forEach((output) => output.addEventListener('input', updateOutputState));
  elements.partCopyButtons.forEach((button) => button.addEventListener('click', handlePartCopy));
  elements.chips.forEach((chip) => chip.addEventListener('click', handleChipClick));
  updateGenerateLabel();
  updateResultMode();
  registerWebMcpTool();
}

function registerWebMcpTool() {
  const context = document.modelContext;
  if (!context?.registerTool) return;

  const allowedValues = {
    siteType: Object.keys(siteTypes),
    industry: Object.keys(industries),
    goal: Object.keys(goals),
    audience: ['auto', ...Object.keys(audienceLabels), 'custom'],
    deliverable: Object.keys(deliverables),
    mockupScope: Object.keys(mockupScopes),
    impressions: Object.keys(impressions),
    color: Object.keys(optionDetails.color),
    style: Object.keys(optionDetails.style),
    spacing: Object.keys(optionDetails.spacing),
    visual: Object.keys(optionDetails.visual),
    animation: Object.keys(optionDetails.animation),
  };

  const enumProperty = (values, description) => ({ type: 'string', enum: values, description });

  const tool = {
    name: 'generate_web_design_brief',
    title: 'Web Design Briefを生成',
    description: '指定されたサイト条件を画面へ反映し、Webデザイン用の構造化プロンプトを生成します。',
    inputSchema: {
      type: 'object',
      properties: {
        siteType: enumProperty(allowedValues.siteType, 'サイト種別のID'),
        industry: enumProperty(allowedValues.industry, '業種のID'),
        industryDetail: { type: 'string', maxLength: 100, description: '具体的な業種・サービス名' },
        goal: enumProperty(allowedValues.goal, '主な目的のID'),
        audience: enumProperty(allowedValues.audience, '想定ユーザーのID'),
        audienceDetail: { type: 'string', maxLength: 120, description: '具体的な想定ユーザー' },
        deliverable: enumProperty(allowedValues.deliverable, '次に作りたいもののID'),
        mockupScope: enumProperty(allowedValues.mockupScope, 'モックアップ画像に含める表示範囲のID'),
        impressions: {
          type: 'array',
          items: enumProperty(allowedValues.impressions, '印象のID'),
          maxItems: 3,
          uniqueItems: true,
        },
        color: enumProperty(allowedValues.color, '配色のID'),
        style: enumProperty(allowedValues.style, 'デザインスタイルのID'),
        spacing: enumProperty(allowedValues.spacing, '余白の取り方のID'),
        visual: enumProperty(allowedValues.visual, '写真・ビジュアルのID'),
        animation: enumProperty(allowedValues.animation, 'アニメーションのID'),
        avoid: { type: 'string', maxLength: 400, description: '避けたいデザイン表現や見せ方' },
        request: { type: 'string', maxLength: 600, description: '自由要望' },
      },
      required: ['siteType', 'industry', 'goal'],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input !== 'object' || Array.isArray(input)) {
        throw new TypeError('入力はオブジェクトで指定してください。');
      }

      ['siteType', 'industry', 'goal'].forEach((key) => {
        if (!allowedValues[key].includes(input[key])) throw new TypeError(`${key} の値が不正です。`);
      });

      const impressionValues = input.impressions || [];
      if (!Array.isArray(impressionValues) || impressionValues.length > 3 ||
        impressionValues.some((value) => !allowedValues.impressions.includes(value)) ||
        new Set(impressionValues).size !== impressionValues.length) {
        throw new TypeError('impressions は重複なしで3つまで指定してください。');
      }

      const nextValues = {
        industryDetail: stringValue(input.industryDetail, 100),
        audience: validOptional(input.audience, allowedValues.audience, 'auto'),
        audienceDetail: stringValue(input.audienceDetail, 120),
        deliverable: validOptional(input.deliverable, allowedValues.deliverable, 'image'),
        mockupScope: validOptional(input.mockupScope, allowedValues.mockupScope, 'set'),
        color: validOptional(input.color, allowedValues.color, 'auto'),
        style: validOptional(input.style, allowedValues.style, 'auto'),
        spacing: validOptional(input.spacing, allowedValues.spacing, 'auto'),
        visual: validOptional(input.visual, allowedValues.visual, 'auto'),
        animation: validOptional(input.animation, allowedValues.animation, 'auto'),
        avoid: stringValue(input.avoid, 400),
        request: stringValue(input.request, 600),
      };

      if (nextValues.audience === 'custom' && !nextValues.audienceDetail.trim()) {
        throw new TypeError('audience が custom の場合は audienceDetail が必要です。');
      }

      elements.siteType.value = input.siteType;
      elements.industry.value = input.industry;
      elements.industryDetail.value = nextValues.industryDetail;
      elements.goal.value = input.goal;
      elements.audience.value = nextValues.audience;
      elements.audienceDetail.value = nextValues.audienceDetail;
      elements.deliverable.value = nextValues.deliverable;
      elements.mockupScope.value = nextValues.mockupScope;
      updateGenerateLabel();
      elements.color.value = nextValues.color;
      elements.style.value = nextValues.style;
      elements.spacing.value = nextValues.spacing;
      elements.visual.value = nextValues.visual;
      elements.animation.value = nextValues.animation;
      elements.avoid.value = nextValues.avoid;
      elements.request.value = nextValues.request;

      selectedImpressions = [...impressionValues];
      elements.chips.forEach((chip) => {
        chip.setAttribute('aria-pressed', String(selectedImpressions.includes(chip.dataset.value)));
      });
      elements.impressionCount.textContent = `${selectedImpressions.length} / 3`;
      elements.audienceCustomField.hidden = elements.audience.value !== 'custom';

      const prompt = buildPrompt();
      renderPromptResult(prompt);
      elements.status.className = 'form-status success';
      elements.status.textContent = isThreePartMode()
        ? '共通仕様書と3つの画像生成プロンプトを作成しました。STEP 1から順番に使用してください。'
        : 'プロンプトを生成しました。右側で確認・編集できます。';

      return {
        status: 'generated',
        characterCount: prompt.length,
        brief: prompt,
      };
    },
  };

  try {
    void Promise.resolve(context.registerTool(tool)).catch((error) => {
      console.warn('WebMCP tool registration failed:', error);
    });
  } catch (error) {
    console.warn('WebMCP tool registration failed:', error);
  }
}

function validOptional(value, allowed, fallback) {
  if (value === undefined) return fallback;
  if (!allowed.includes(value)) throw new TypeError('選択値が不正です。');
  return value;
}

function stringValue(value, maxLength) {
  if (value === undefined) return '';
  if (typeof value !== 'string' || value.length > maxLength) {
    throw new TypeError(`テキストは${maxLength}文字以内で指定してください。`);
  }
  return value;
}

function handleAudienceChange() {
  const isCustom = elements.audience.value === 'custom';
  elements.audienceCustomField.hidden = !isCustom;
  if (isCustom) elements.audienceDetail.focus();
}

function updateGenerateLabel() {
  elements.generateLabel.textContent = generateLabels[elements.deliverable.value] || generateLabels.image;
  elements.mockupScopeField.hidden = elements.deliverable.value !== 'image';
  updateResultMode();
}

function isThreePartMode() {
  return elements.deliverable.value === 'image' && elements.mockupScope.value === 'set';
}

function updateResultMode() {
  if (!elements.singleResult || !elements.splitResults) return;
  const splitMode = isThreePartMode();
  elements.singleResult.hidden = splitMode;
  elements.splitResults.hidden = !splitMode;
  elements.copyButton.hidden = splitMode;
  elements.resultPanel?.classList.toggle('split-mode', splitMode);
}

function handleChipClick(event) {
  const chip = event.currentTarget;
  const value = chip.dataset.value;
  const selected = chip.getAttribute('aria-pressed') === 'true';

  elements.impressionMessage.textContent = '';

  if (selected) {
    selectedImpressions = selectedImpressions.filter((item) => item !== value);
    chip.setAttribute('aria-pressed', 'false');
  } else if (selectedImpressions.length < 3) {
    selectedImpressions.push(value);
    chip.setAttribute('aria-pressed', 'true');
  } else {
    elements.impressionMessage.textContent = '印象は3つまで選択できます。';
  }

  elements.impressionCount.textContent = `${selectedImpressions.length} / 3`;
}

function handleGenerate(event) {
  event.preventDefault();
  clearValidation();

  try {
    const invalidFields = [elements.siteType, elements.industry, elements.goal].filter((field) => !field.value);
    if (invalidFields.length > 0) {
      invalidFields.forEach((field) => field.setAttribute('aria-invalid', 'true'));
      elements.status.className = 'form-status';
      elements.status.textContent = '必須項目を選択してください。';
      invalidFields[0].focus();
      return;
    }

    if (elements.audience.value === 'custom' && !elements.audienceDetail.value.trim()) {
      elements.audienceDetail.setAttribute('aria-invalid', 'true');
      elements.status.className = 'form-status';
      elements.status.textContent = '想定ユーザーを入力してください。';
      elements.audienceDetail.focus();
      return;
    }

    const prompt = buildPrompt();
    renderPromptResult(prompt);
    elements.status.className = 'form-status success';
    elements.status.textContent = isThreePartMode()
      ? '共通仕様書と3つの画像生成プロンプトを作成しました。STEP 1から順番に使用してください。'
      : 'プロンプトを生成しました。右側で確認・編集できます。';

    if (window.matchMedia('(max-width: 980px)').matches) {
      document.getElementById('result-title').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    console.error('Prompt generation failed:', error);
    elements.status.className = 'form-status';
    elements.status.textContent = '生成中に問題が発生しました。入力内容を確認して、もう一度お試しください。';
  }
}

function buildPrompt() {
  if (elements.deliverable.value === 'image') return buildImageMockupPrompt();
  if (elements.deliverable.value === 'prototype') return buildPrototypePrompt();

  const site = siteTypes[elements.siteType.value];
  const industry = industries[elements.industry.value];
  const goal = goals[elements.goal.value];
  const industryName = sanitizeText(elements.industryDetail.value) || industry.label;
  const audience = resolveAudience(industry);
  const impressionNames = selectedImpressions.map((key) => impressions[key].label);
  const impressionDirections = selectedImpressions.map((key) => `- ${impressions[key].text}`);
  const adjustments = getCombinationAdjustments(elements.industry.value, selectedImpressions);
  const avoid = sanitizeText(elements.avoid.value);
  const request = sanitizeText(elements.request.value);

  const conceptLead = impressionNames.length
    ? `「${impressionNames.join('・')}」を核にし、${industryName}としての適切さと主な目的を両立させる。`
    : `${industryName}の特性と主な目的から、ふさわしい印象と視覚表現を判断する。`;

  const sections = [
    '# Web Design Brief',
    '',
    '## 制作対象',
    `${industryName}の${site.label}をデザインしてください。`,
    site.direction,
    '',
    '業種としての前提：',
    industry.traits,
    industry.avoid,
    '',
    '## 主な目的',
    goal.label,
    goal.text,
    '',
    '## 想定ユーザー',
    audience,
    'このユーザーが最初に知りたいこと、比較時に抱く疑問や不安、行動を決める根拠を整理し、それらが自然に解消される閲覧体験を設計してください。',
    '',
    '## デザインコンセプト',
    conceptLead,
    ...(impressionDirections.length ? ['', ...impressionDirections] : []),
    ...(adjustments.length ? ['', '組み合わせに関する調整：', ...adjustments.map((item) => `- ${item}`)] : []),
    '',
    '## 配色・スタイル・ビジュアル',
    `- 配色：${optionDetails.color[elements.color.value]}`,
    `- スタイル：${optionDetails.style[elements.style.value]}`,
    `- 余白：${optionDetails.spacing[elements.spacing.value]}`,
    `- 写真・ビジュアル：${optionDetails.visual[elements.visual.value]}`,
    `- アニメーション：${optionDetails.animation[elements.animation.value]}`,
    '',
    '## レイアウト・UI',
    ...qualityRules.map((rule) => `- ${rule}`),
    '',
    '次のようなAI特有のテンプレート感を避けてください。',
    ...antiTemplateRules.map((rule) => `- ${rule}`),
    '',
    '個性を出す場合も、可読性や操作性を犠牲にしないでください。',
    ...(avoid ? [
      '',
      '## ユーザーが避けたい表現',
      avoid,
      '上記の意図を尊重し、別の表現手段でデザインの目的を達成してください。',
    ] : []),
    '',
    '## コンテンツ設計',
    'サイトの目的を達成するために必要なセクション構成を提案してください。',
    '各セクションには「このセクションで何を理解・判断してもらうか」という明確な役割を持たせてください。',
    '定型構成を並べるのではなく、想定ユーザーが抱える疑問や不安が自然に解消される順序で設計してください。必要性の低いセクションは無理に追加しないでください。',
    '',
    '## AIへの判断指示',
    'ユーザーが指定していない項目には、無難な初期値を機械的に当てはめないでください。業種、サイトの目的、想定ユーザー、デザインコンセプトを総合して判断してください。',
    '既存テンプレートをそのまま適用した見た目ではなく、この業種と目的に適した視覚的な個性を持たせてください。ただし、個性のために操作性や可読性を犠牲にしないでください。',
    '判断に迷う場合は、装飾を増やすよりも、情報設計、余白、タイポグラフィ、写真、レイアウトの質を優先してください。「それらしく見せる装飾」ではなく、「目的達成に必要な視覚表現」を選んでください。',
    '',
    '優先順位は次の通りです。',
    '1. サイトの目的',
    '2. 業種としての適切性',
    '3. ユーザーが明示した条件',
    '4. 共通デザイン原則',
    '5. AIによる自由判断',
    '',
    '## 追加要望',
    request || '特になし。未指定の内容は上記の判断指示に従って提案してください。',
    '',
    '## 出力',
    'まずページ全体のデザインコンセプトと、その意図を簡潔に説明してください。',
    'その後に、ページ構成と各セクションのデザイン方針を提示してください。',
    '必要に応じて、配色、タイポグラフィ、余白、写真、UIコンポーネントの方針も具体化してください。',
  ];

  return sections.join('\n');
}

function getGenerationContext() {
  const siteKey = elements.siteType.value;
  const industry = industries[elements.industry.value];
  return {
    site: siteTypes[siteKey],
    siteKey,
    industry,
    industryName: sanitizeText(elements.industryDetail.value) || industry.label,
    goal: goals[elements.goal.value],
    audience: resolveAudience(industry),
    impressionDirections: selectedImpressions.map((key) => impressions[key].text),
    impressionNames: selectedImpressions.map((key) => impressions[key].label),
    adjustments: getCombinationAdjustments(elements.industry.value, selectedImpressions),
    color: optionDetails.color[elements.color.value],
    style: optionDetails.style[elements.style.value],
    spacing: optionDetails.spacing[elements.spacing.value],
    visual: optionDetails.visual[elements.visual.value],
    animation: optionDetails.animation[elements.animation.value],
    avoid: sanitizeText(elements.avoid.value),
    request: sanitizeText(elements.request.value),
    mockupScope: elements.mockupScope.value,
  };
}

function buildImageMockupPrompt() {
  const context = getGenerationContext();
  if (context.mockupScope === 'set') return buildGuidedPromptSet(context);
  return buildSingleImageMockupPrompt(context, context.mockupScope);
}

function buildGuidedPromptSet(context) {
  const parts = [
    { key: 'spec', title: 'STEP 1 / 共通デザイン仕様書' },
    { key: 'top', title: 'STEP 2 / ページ上部' },
    { key: 'middle', title: 'STEP 3 / ページ中部' },
    { key: 'bottom', title: 'STEP 4 / ページ下部' },
  ];

  const prompts = buildGuidedPromptParts(context);

  return [
    '# Website UI Mockup Guided Prompt Set',
    '',
    '以下の4本を、同じChatGPTチャットでSTEP 1から順番に1本ずつ使用してください。',
    '最初に共通デザイン仕様書を確定し、その仕様書と先に生成した画像を基準に3分割の画像を生成してください。',
    '',
    ...parts.flatMap((part, index) => [
      `================ ${part.title} ================`,
      '',
      prompts[part.key],
      ...(index < parts.length - 1 ? ['', ''] : []),
    ]),
  ].join('\n');
}

function buildGuidedPromptParts(context = getGenerationContext()) {
  return {
    spec: buildCommonDesignSpecificationPrompt(context),
    top: buildGuidedPartImagePrompt(context, 'top'),
    middle: buildGuidedPartImagePrompt(context, 'middle'),
    bottom: buildGuidedPartImagePrompt(context, 'bottom'),
  };
}

function buildCommonDesignSpecificationPrompt(context) {
  const concept = context.impressionNames.length
    ? `「${context.impressionNames.join('・')}」を軸にする。`
    : '業種・目的・想定ユーザーに適した視覚的な個性を判断する。';
  const allSections = pageStructures[context.siteKey] || pageStructures.other;

  return [
    '# Common Design Specification Creation Prompt',
    '',
    `あなたはシニアWebデザイナーです。${context.industryName}の${context.site.label}について、これから同じチャットで生成するページ上部・中部・下部の3枚に共通して適用するデザイン仕様書を作成してください。`,
    'この段階では画像を生成しないでください。曖昧な選択肢を残さず、以降の画像生成で変更しない具体的なルールとして確定してください。',
    '',
    '## Project Context',
    `- 主な目的：${context.goal.label}。${context.goal.text}`,
    `- 想定ユーザー：${context.audience}`,
    `- 業種の前提：${context.industry.traits}`,
    `- デザインコンセプト：${concept}`,
    ...context.impressionDirections.map((direction) => `- ${direction}`),
    ...context.adjustments.map((adjustment) => `- ${adjustment}`),
    `- 配色の方向性：${context.color}`,
    `- スタイル：${context.style}`,
    `- 余白：${context.spacing}`,
    `- 写真・ビジュアル：${context.visual}`,
    ...(context.avoid ? [`- ユーザーが避けたい表現：${context.avoid}`] : []),
    ...(context.request ? [`- 追加要望：${context.request}`] : []),
    '',
    '## Whole-page Architecture',
    ...allSections.map((section, index) => `${index + 1}. ${section}`),
    '',
    '## Required Specification',
    '次の項目を、実装判断に使える具体性で1案に確定してください。複数案は提示しないでください。',
    '1. Design principles：このサイト固有の視覚原則を3〜5項目',
    '2. Color tokens：Primary、Accent、Background、Surface、Text、Muted text、BorderのHEX値と使用比率・用途',
    '3. Typography：和文・欧文の書体カテゴリ、見出し・本文・補足のサイズ階層、ウェイト、行間',
    '4. Layout system：デスクトップ幅、コンテンツ最大幅、カラム数、ガター、左右余白、基準グリッド',
    '5. Spacing system：セクション間、要素間、文字まわりに使う具体的な余白スケール',
    '6. Components：ヘッダー、ナビゲーション、CTA、ボタン、カード、罫線、角丸、影の統一ルール',
    '7. Photography：被写体、構図、光、色温度、トリミング、避ける写真表現',
    '8. Content density：1セクションの情報量、本文行数、カード数、ナビゲーション数の上限',
    '9. Continuity rules：上部・中部・下部で絶対に変更しない要素と、セクションごとに変化させてよい要素',
    '10. Prohibited expressions：テンプレート感や業種との不一致を防ぐ禁止事項',
    '',
    '## Constraints',
    '- 「暖色系」「モダン」「広め」などの抽象語だけで終わらせず、色・寸法・比率・用途へ具体化する。',
    '- 根拠のない実績値、受賞歴、顧客名、人物名を仕様へ追加しない。',
    `- ${context.industry.avoid}`,
    '- 仕様書内で矛盾が生じる場合は、サイトの目的、業種としての適切性、可読性、ユーザー指定の順に調整する。',
    '',
    '## Output',
    '見出しを「# Common Design Specification — Design Lock v1」とし、仕様書本文だけを出力してください。画像やモックアップは生成しないでください。',
    '出力した仕様書を、このチャットで続けて行う3枚の画像生成における固定ルールとして保持してください。',
  ].join('\n');
}

function buildGuidedPartImagePrompt(context, scopeKey) {
  const scope = mockupScopes[scopeKey];
  const allSections = pageStructures[context.siteKey] || pageStructures.other;
  const scopedSections = scope.indices.map((index) => allSections[index]);
  const priorImageRules = {
    top: [
      'このチャットで直前に確定した「Common Design Specification — Design Lock v1」を、視覚表現の最優先ルールとして使用する。',
      '共通仕様書がまだ作成されていない場合は画像を生成せず、先にSTEP 1を実行するよう伝える。',
    ],
    middle: [
      'このチャットで確定した共通仕様書と、直前に生成したページ上部画像の両方を参照する。',
      '配色、文字階層、コンテンツ幅、グリッド、余白、ボタン、罫線、角丸、影、写真のトーンを変更しない。',
      '共通仕様書または上部画像を参照できない場合は画像を生成せず、不足しているものを伝える。',
    ],
    bottom: [
      'このチャットで確定した共通仕様書と、これまでに生成したページ上部・中部画像をすべて参照する。',
      '確立済みの配色、文字階層、コンテンツ幅、グリッド、余白、ボタン、罫線、角丸、影、写真のトーンを変更しない。',
      '共通仕様書または先行画像を参照できない場合は画像を生成せず、不足しているものを伝える。',
    ],
  };

  return [
    `# Website UI Mockup Image Prompt — ${scope.label}`,
    '',
    `Create a high-fidelity, production-ready website UI mockup for the ${scope.label} of a ${context.industryName} ${context.site.label}.`,
    'コンセプトアートや広告ではなく、実際に公開されている同一Webサイトの連続した画面として描画してください。',
    '',
    '## Authoritative Sources',
    ...priorImageRules[scopeKey].map((rule) => `- ${rule}`),
    '- このプロンプトは表示範囲とコンテンツの役割だけを指定する。色やUIルールを新しく選び直さない。',
    '',
    '## Purpose and Audience',
    `- 主な目的：${context.goal.label}。${context.goal.text}`,
    `- 想定ユーザー：${context.audience}`,
    '',
    '## Canvas / Framing',
    `- 表示範囲：${scope.label}`,
    ...scope.framing.map((rule) => `- ${rule}`),
    '- PC、スマートフォン、ブラウザなどのデバイス枠には入れない。',
    '- プレゼンテーションボード、注釈、カラーパレット見本、周囲の装飾を付けない。',
    '- 画像全体をWebサイトのUIだけで構成する。',
    '',
    '## Page Architecture',
    ...scopedSections.map((section, index) => `${index + 1}. ${section}`),
    '- 各セクションに異なる役割と構図を持たせ、同じカードレイアウトを反復しない。',
    '',
    '## Rendering Priorities',
    '1. 共通仕様書と先行画像のデザインを維持する',
    '2. 余白のリズムと読みやすい文字サイズを保つ',
    '3. 指定範囲の情報階層とセクション構成を表現する',
    '4. 補助的な文章や要素を収める',
    '- キャンバスに収まらない場合は、余白や文字を縮小せず、優先度の低い文章・カードを省略する。',
    '- 日本語の本文は1ブロック2〜3行を目安とし、意味不明な文字列やLorem ipsumを使わない。',
    '- 根拠のない実績値、受賞歴、顧客ロゴ、評価、人物名を追加しない。',
    '- 新しいデザイン案として作り直さず、今回指定した表示範囲だけを生成する。',
    '',
    '## Output',
    `共通仕様書と参照画像を継承した「${scope.label}」のモックアップ画像を1枚、直接生成してください。条件が揃っている場合、説明やデザイン解説は不要です。`,
  ].join('\n');
}

function buildSingleImageMockupPrompt(context, scopeKey) {
  const scope = mockupScopes[scopeKey] || mockupScopes.key;
  const allSections = pageStructures[context.siteKey] || pageStructures.other;
  const scopedSections = scope.indices.map((index) => allSections[index]);
  const continuityRules = getContinuityRules(scopeKey);
  const concept = context.impressionNames.length
    ? `「${context.impressionNames.join('・')}」を軸にする。`
    : '業種・目的・想定ユーザーに適した視覚的な個性を判断する。';

  return [
    '# Website UI Mockup Image Prompt',
    '',
    `Create a high-fidelity, production-ready website UI mockup for a ${context.industryName} ${context.site.label}.`,
    'コンセプトアートやWebサイトを紹介する広告ではなく、実際に公開されている完成済みWebサイトの画面として描画してください。',
    '',
    '## 制作目的と想定ユーザー',
    `- 主な目的：${context.goal.label}。${context.goal.text}`,
    `- 想定ユーザー：${context.audience}`,
    `- 業種の前提：${context.industry.traits}`,
    '',
    '## Canvas / Framing',
    `- 表示範囲：${scope.label}`,
    ...scope.framing.map((rule) => `- ${rule}`),
    '- 描画対象となるWebサイト画面の左右端と、選択した表示範囲の構成が分かるようにする。',
    '- PC、スマートフォン、ブラウザなどのデバイス枠には入れない。',
    '- プレゼンテーションボード、注釈、カラーパレット見本、周囲の装飾を付けない。',
    '- 画像全体をWebサイトのUIだけで構成する。',
    ...(continuityRules.length ? [
      '',
      '## Reference Continuity',
      ...continuityRules.map((rule) => `- ${rule}`),
    ] : []),
    '',
    '## Page Architecture',
    ...scopedSections.map((section, index) => `${index + 1}. ${section}`),
    '各セクションは異なる役割と構図を持たせ、同じカードレイアウトを反復しない。',
    '',
    '## Visual Direction',
    `- コンセプト：${concept}`,
    ...(context.impressionDirections.length
      ? context.impressionDirections.map((direction) => `- ${direction}`)
      : ['- 視覚表現は業種と目的から判断し、既成テンプレートの雰囲気をそのまま使わない。']),
    ...context.adjustments.map((adjustment) => `- ${adjustment}`),
    `- 配色：${context.color}`,
    `- スタイル：${context.style}`,
    `- 余白：${context.spacing}`,
    `- 写真・ビジュアル：${context.visual}`,
    '',
    '## UI Rendering Requirements',
    '- 明確なグリッド、情報階層、タイポグラフィ、余白のリズムを持つ、実装可能なレイアウトにする。',
    '- 日本語の見出しとUI文言を短く、読みやすく配置する。本文は1ブロック2〜3行を目安とし、長文を詰め込まない。',
    '- ナビゲーション項目は5個以内にし、本文を収めるために文字サイズや行間を小さくしない。',
    '- セクション間の余白量をページ上部から下部まで一貫させる。下に進むほど密度を上げない。',
    '- ロゴが未指定の場合は、架空のロゴを描き込まず、控えめなテキストロゴとして扱う。',
    '- 根拠のない実績値、受賞歴、顧客ロゴ、評価、人物名を追加しない。',
    '- CTAは主な目的に対応させ、ページ内で一貫した優先順位にする。',
    '',
    '## Hard Priorities',
    '指示が競合する場合は、必ず次の順序で優先してください。',
    '1. 余白のリズムと読みやすい文字サイズを保つ',
    '2. 明確な情報階層と、セクションごとに異なる構図を保つ',
    '3. 主な目的に必要な内容を残す',
    '4. 指定されたセクション数を満たす',
    'キャンバスに収まらない場合は、余白や文字を縮小せず、優先度の低い文章・カード・セクションを省略してください。',
    '',
    '## Constraints',
    ...antiTemplateRules.map((rule) => `- ${rule}`),
    `- ${context.industry.avoid}`,
    ...(context.avoid ? [`- ユーザーが避けたい表現：${context.avoid}`] : []),
    ...(context.request ? [`- 追加要望：${context.request}`] : []),
    '',
    '## Output',
    `「${scope.label}」の範囲だけを対象として、上記を満たすWebサイトのモックアップ画像を1枚、直接生成してください。生成前の説明、デザイン解説、箇条書きの回答は不要です。`,
  ].join('\n');
}

function getContinuityRules(scopeKey) {
  if (scopeKey === 'middle') {
    return [
      'このチャットで直前に生成した「ページ上部」の画像を、デザインシステムの参照画像として扱う。',
      '上部画像の配色、タイポグラフィ、コンテンツ幅、グリッド、余白のリズム、ボタン、罫線、角丸、写真のトーンを維持する。',
      '新しいデザイン案として作り直さず、同一Webサイトの自然な続きとしてページ中部だけを生成する。',
    ];
  }

  if (scopeKey === 'bottom') {
    return [
      'このチャットでこれまでに生成した「ページ上部」と「ページ中部」の画像を、デザインシステムの参照画像として扱う。',
      '確立済みの配色、タイポグラフィ、コンテンツ幅、グリッド、余白のリズム、ボタン、罫線、角丸、写真のトーンを変更しない。',
      '新しいデザイン案として作り直さず、同一Webサイトの自然な続きとしてページ下部だけを生成する。',
    ];
  }

  return [];
}

function buildPrototypePrompt() {
  const context = getGenerationContext();
  const concept = context.impressionNames.length
    ? `「${context.impressionNames.join('・')}」を軸にする。`
    : '業種・目的・想定ユーザーに適した視覚的な個性を判断する。';

  return [
    '# Frontend Prototype Implementation Brief',
    '',
    `あなたはシニアWebデザイナー兼フロントエンドエンジニアです。${context.industryName}の${context.site.label}について、ブラウザで確認できる高品質なシングルページのHTML/CSSプロトタイプを制作してください。`,
    '',
    '## 目的と利用者',
    `- 主な目的：${context.goal.label}。${context.goal.text}`,
    `- 想定ユーザー：${context.audience}`,
    `- サイト設計：${context.site.direction}`,
    `- 業種の前提：${context.industry.traits}`,
    '',
    '## ページ構成',
    ...(pageStructures[context.siteKey] || pageStructures.other).map((section, index) => `${index + 1}. ${section}`),
    '各セクションには、利用者に何を理解・判断してもらうかという役割を持たせてください。必要性の低いセクションは追加しないでください。',
    '',
    '## デザイン方針',
    `- コンセプト：${concept}`,
    ...(context.impressionDirections.length
      ? context.impressionDirections.map((direction) => `- ${direction}`)
      : ['- 視覚表現は業種と目的から判断し、既成テンプレートの雰囲気をそのまま使わない。']),
    ...context.adjustments.map((adjustment) => `- ${adjustment}`),
    `- 配色：${context.color}`,
    `- スタイル：${context.style}`,
    `- 余白：${context.spacing}`,
    `- 写真・ビジュアル：${context.visual}`,
    `- アニメーション：${context.animation}`,
    '',
    '## 実装要件',
    '- HTML、CSS、Vanilla JavaScriptを使用し、外部フレームワークなしで動作させる。',
    '- index.html、assets/css/style.css、assets/js/app.jsの構成で、すぐにローカル表示できる完成コードを作る。',
    '- セマンティックHTMLを使用し、見出し階層、ランドマーク、フォームラベル、代替テキストを適切に設定する。',
    '- PC、タブレット、スマートフォンで情報階層を保つレスポンシブレイアウトにする。',
    '- キーボード操作、フォーカス表示、十分なコントラスト、タップ領域、動きを減らす設定に配慮する。',
    '- 実際のサイトとして自然な日本語の仮コンテンツを使う。ただし、実在しない実績値、受賞歴、顧客名、口コミを捏造しない。',
    '- 写真が必要な箇所は用途と推奨アスペクト比が分かるプレースホルダーにし、架空の画像URLを記述しない。',
    '- 主要な操作には通常時、ホバー時、フォーカス時を用意する。',
    '',
    '## 品質・禁止事項',
    ...qualityRules.map((rule) => `- ${rule}`),
    ...antiTemplateRules.map((rule) => `- ${rule}`),
    `- ${context.industry.avoid}`,
    ...(context.avoid ? [`- ユーザーが避けたい表現：${context.avoid}`] : []),
    ...(context.request ? [`- 追加要望：${context.request}`] : []),
    '',
    '## 出力',
    '最初に実装方針を3〜5項目で簡潔に示し、その後に必要な全ファイルの完成コードを省略せず提示してください。コード内に未解決のTODOを残さないでください。',
    '最後に、ローカルで表示する方法と、確認したレスポンシブ・アクセシビリティ項目を簡潔に示してください。',
  ].join('\n');
}

function resolveAudience(industry) {
  const customAudience = sanitizeText(elements.audienceDetail.value);
  if (customAudience) return customAudience;
  if (elements.audience.value === 'auto') return industry.audience;
  return audienceLabels[elements.audience.value] || industry.audience;
}

function getCombinationAdjustments(industryKey, selected) {
  const industryAdjustments = combinationRules
    .filter((rule) => rule.industry === industryKey && selected.includes(rule.impression))
    .map((rule) => rule.text);
  const pairAdjustments = impressionPairRules
    .filter((rule) => rule.pair.every((item) => selected.includes(item)))
    .map((rule) => rule.text);
  return [...industryAdjustments, ...pairAdjustments];
}

function sanitizeText(value) {
  return value.trim().replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ');
}

async function handleCopy() {
  await copyTextArea(elements.output, elements.copyLabel);
}

async function handlePartCopy(event) {
  const button = event.currentTarget;
  const output = document.getElementById(button.dataset.target);
  const label = button.querySelector('.part-copy-label');
  await copyTextArea(output, label);
}

async function copyTextArea(output, label) {
  const text = output.value;
  if (!text) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      output.focus();
      output.select();
      const copied = document.execCommand('copy');
      if (!copied) throw new Error('Fallback copy failed');
      output.setSelectionRange(0, 0);
    }
    label.textContent = 'コピー済み';
    window.setTimeout(() => { label.textContent = 'コピー'; }, 1800);
  } catch (error) {
    console.error('Copy failed:', error);
    label.textContent = '選択してコピー';
    output.focus();
    output.select();
  }
}

function renderPromptResult(prompt) {
  updateResultMode();

  if (isThreePartMode()) {
    const prompts = buildGuidedPromptParts();
    const keys = ['spec', 'top', 'middle', 'bottom'];
    elements.partOutputs.forEach((output, index) => {
      output.value = prompts[keys[index]];
    });
    elements.output.value = '';
  } else {
    elements.output.value = prompt;
    elements.partOutputs.forEach((output) => { output.value = ''; });
  }

  updateOutputState();
}

function updateOutputState() {
  updateResultMode();
  const hasOutput = elements.output.value.length > 0;
  elements.copyButton.disabled = !hasOutput;
  elements.emptyDecoration.hidden = hasOutput;
  elements.characterCount.textContent = `${elements.output.value.length.toLocaleString('ja-JP')}文字`;

  elements.partOutputs.forEach((output, index) => {
    const partHasOutput = output.value.length > 0;
    elements.partCopyButtons[index].disabled = !partHasOutput;
    elements.partCharacterCounts[index].textContent = `${output.value.length.toLocaleString('ja-JP')}文字`;
  });
}

function clearValidation() {
  [elements.siteType, elements.industry, elements.goal, elements.audienceDetail]
    .forEach((field) => field.removeAttribute('aria-invalid'));
  elements.status.textContent = '';
  elements.status.className = 'form-status';
}

function handleReset() {
  window.setTimeout(() => {
    selectedImpressions = [];
    elements.chips.forEach((chip) => chip.setAttribute('aria-pressed', 'false'));
    elements.impressionCount.textContent = '0 / 3';
    elements.impressionMessage.textContent = '';
    elements.audienceCustomField.hidden = true;
    elements.output.value = '';
    elements.partOutputs.forEach((output) => { output.value = ''; });
    elements.copyLabel.textContent = 'コピー';
    elements.partCopyButtons.forEach((button) => {
      button.querySelector('.part-copy-label').textContent = 'コピー';
    });
    updateGenerateLabel();
    clearValidation();
    updateOutputState();
  }, 0);
}
