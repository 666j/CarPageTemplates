var Premiere_Screen_DataKeyframes = {
    containerSelectorStr: "#premiere-screen",
    templateStr: "section_premiere_screen_template",
    SECTION_SCROLLY_LENGTH: 250,
    START_POS_OFFSET: 0,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 0,
        hashString: "premiere-screen"
    }],
    elements: [{
        selectorString: "#kk-lp-bg-1200x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-lho-444x811",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-kennedy-429x811",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-natgeo-116x40",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-kk-341x93",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-text-139x24",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#kk-lp-arrow-44x25",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fwa-SotD-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 150,
            styles: {
                translate: {
                    x: "-150%",
                    y: "150%"
                }
            }
        }]
    }]
},
RWD_Video_DataKeyframes = {
    containerSelectorStr: "#rendezvous-with-death-video",
    templateStr: "section_rwd_video_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    isSectionHidable: !1,
    vPlayer: null,
    onInit: function(s) {
        s.$section = $(s.containerSelectorStr)
    },
    onLoad: function(s) {
        s.vPlayer || (s.vPlayer = new FullScreenVideoJSPlayer({
            videoElemString: "rendezvous-with-death-video-element",
            $videoContainer: $("#rendezvous-with-death-video-container"),
            $blackBg: $("#rendezvous-with-death-video-blackBG"),
            onCompleteCallback: function() {
                window.location.hash = "#!/rendezvous-with-death-title-screen"
            }
        }))
    },
    onUnload: function(s) {
        s.vPlayer && (s.vPlayer.pause(), s.vPlayer.dispose(), s.vPlayer = null)
    },
    onShow: function(s) {
        s.$section.css({
            left: "0px"
        }),
        s.vPlayer && (s.vPlayer.resize(), s.vPlayer.play())
    },
    onHide: function(s) {
        s.$section.css({
            left: "1000000px"
        }),
        s.vPlayer && s.vPlayer.pause()
    },
    onUpdate: function() {},
    onResize: function(s) {
        s.vPlayer && s.vPlayer.resize()
    },
    snapPoints: [{
        scrollPosY: 250,
        hashString: "rendezvous-with-death-video"
    }],
    elements: [{
        selectorString: "#rendezvous-with-death-video-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#rendezvous-with-death-video-blackBG",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#rendezvous-with-death-video-drag-interceptor",
        keyframes: [{
            scrollYPos: 249.99,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250.01,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#rendezvous-with-death-video-back",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        }]
    },
    {
        selectorString: "#rendezvous-with-death-video-continue",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        }]
    }]
},
TitleScreen_DataKeyframes = {
    containerSelectorStr: "#title-screen",
    templateStr: "section_title_screen_template",
    SECTION_SCROLLY_LENGTH: 1e3,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    pausePoints: [],
    snapPoints: [{
        scrollPosY: 250,
        hashString: "rendezvous-with-death-title-screen"
    },
    {
        scrollPosY: 500,
        hashString: "oswald-bio"
    },
    {
        scrollPosY: 750,
        hashString: "jfk-bio"
    }],
    elements: [{
        selectorString: "#title-screen-rendezvousLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-rendezvousRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-JFK-faceRightFirst",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-JFK-faceRightSecond",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-LHO-faceLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-JFK-faceLeft",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#title-screen-LHO-faceRight",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-bio",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-250%"
                }
            }
        }]
    },

    {
        selectorString: "#jfk-bio",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
	{
        selectorString: "#jfk-bio2",
        keyframes: [{
            scrollYPos: 400,
            styles: {
                translate: {
                    x: "50%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "50%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "50%",
                    y: "200%"
                }
            }
        }]
    }
	]
},

Ambition_Intro_and_JFK_A_DataKeyframes = {
    containerSelectorStr: "#ambition-intro-and-jfk-a",
    templateStr: "section_ambition_intro_and_jfk_a_template",
    SECTION_SCROLLY_LENGTH: 1500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "ambition-intro-a-poem"
    },
    {
        scrollPosY: 500,
        hashString: "ambition-intro-a-chapter-one"
    },
    {
        scrollPosY: 750,
        hashString: "ambition-intro-jfk-a-young-aspirations"
    },
    {
        scrollPosY: 1e3,
        hashString: "ambition-intro-jfk-a-secondary"
    },
    {
        scrollPosY: 1250,
        hashString: "ambition-intro-jfk-a-quote"
    }],
    elements: [{
        selectorString: "#ambition-intro-and-jfk-a-JFK-bgLeft",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-LHO-bgLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-LHO-leaning",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-200px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-JFK-bgRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-JFK-harvard",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "200px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-blackOverlay",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-intro-a-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "1350px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-1350px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-ambi",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-tion",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-chaptertitle",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-intro-jfk-a-young-aspirations",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-250%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-jfk-a-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-jfk-a-location-identifier-b",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-early-life-caption",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#meet-the-kennedys",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 925,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1075,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1200,
            styles: {
                translate: {
                    x: "0%",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#cape-cod",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 950,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1050,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1200,
            styles: {
                translate: {
                    x: "0%",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#the-kennedy-family",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 975,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1025,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1200,
            styles: {
                translate: {
                    x: "0%",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-intro-and-jfk-a-blueOverlay",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: .5
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-intro-jfk-a-quote",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        }]
    }]
},
Ambition_A_LHO_DataKeyframes = {
    containerSelectorStr: "#ambition-a-lho",
    templateStr: "section_ambition_a_lho_template",
    SECTION_SCROLLY_LENGTH: 1e3,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "ambition-a-oswald-young-alienation"
    },
    {
        scrollPosY: 500,
        hashString: "ambition-a-oswald-secondary"
    },
    {
        scrollPosY: 750,
        hashString: "ambition-a-oswald-quote"
    }],
    elements: [{
        selectorString: "#ambition-a-lho-bgLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-bgRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-leaning",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-200px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-oswald-young-alienation",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-driven-to-drop-out-caption",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-location-identifier-b",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#lee-forges-ahead",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 425,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 575,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#striving-for-socialism",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 550,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#meet-the-oswalds",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 475,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 525,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#marguerite-oswald-bio",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 400,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 600,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-a-lho-redOverlay",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: .5
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-a-oswald-quote",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        }]
    }]
},
Ambition_B_JFK_and_LHO_DataKeyframes = {
    containerSelectorStr: "#ambition-b-jfk-and-lho",
    templateStr: "section_ambition_b_jfk_and_lho_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [
    ],
    elements: [{
        selectorString: "#ambition-b-jfk-and-lho-bgLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-bgRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
 
   
   
    {
        selectorString: "#ambition-b-jfk-and-lho-whiteOverlayFull",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 175,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
   
 
    {
        selectorString: "#ambition-b-oswald-jfk-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-oswald-jfk-location-identifier-b",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-oswald-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-oswald-location-identifier-b",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#kennedys-at-war",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-1400px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 625.01,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#coconuts-and-war-stories",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-1600px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 625.01,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#joe-kennedy-1942",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-1800px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 625.01,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-oswald-called-to-serve",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-target",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-bullet1",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 939.99,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 940,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-bullet2",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 969.99,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 970,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-bullet3",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 999.99,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#wrong-turn",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 939.99,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 940,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#thirsty-for-power",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 969.99,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 970,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-b-jfk-and-lho-LHO-sharpshooter-caption",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    }]
},
Ambition_C_LHO_Map_DataKeyframes = {
    containerSelectorStr: "#ambition-c-lho-map",
    templateStr: "section_ambition_c_lho_map_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [
    
   
    ],
    elements: [{
        selectorString: "#ambition-c-lho-map-bg-map-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-bg-map-middle",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-600px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-bg-map-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-600px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-bg-map-noFlag",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-2500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-600px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-bg-map-noFlag",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-2500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-600px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-bg-map-moscowFlag",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 1,
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1075,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-600px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-letter",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: -80,
                translate: {
                    x: "0px",
                    y: "2000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "600px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-map-asperations-of-allegiance",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-blackOverlay",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-map-citizenship-quote",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "-100%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-letter-quote",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "600px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-map-passport",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                rotate: -40,
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                rotate: -4,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                rotate: -40,
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-date-left",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1800px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-date-right",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1800px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail00",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 570,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 580,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail01",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 580,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 590,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail02",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 590,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 600,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail03",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 600,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 610,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail04",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 610,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 620,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail05",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 620,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 630,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail06",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 630,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 640,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail07",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 640,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 650,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail08",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 650,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 660,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail09",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 660,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 670,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail10",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 670,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 680,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail11",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 680,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 690,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail12",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 690,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 700,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail13",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 700,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 710,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail14",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 710,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 720,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail15",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 720,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 730,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-map-trail16",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 730,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 740,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-400px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-400px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#good-bye-america",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 655,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 665,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-900px",
                    y: "0px"
                }
            }
        }]
    }]
},
Ambition_C_LHO_Moscow_DataKeyframes = {
    containerSelectorStr: "#ambition-c-lho-moscow",
    templateStr: "section_ambition_c_lho_moscow_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#ambition-c-lho-moscow-bg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-moscow-bg-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-moscow-blackOverlay",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-moscow-citizenship-revoked-quote",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-moscow-citizenship-revoked-letter",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                rotate: 20,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                rotate: -20,
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-moscow-citizenship-revoked-letter-highlight",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                rotate: 20,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                rotate: -20,
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-moscow-suicide-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-lho-moscow-suicide-polariod",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: 40,
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: -40,
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-oswald-moscow-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Ambition_C_JFK_Political_Career_DataKeyframes = {
    containerSelectorStr: "#ambition-c-jfk-political-career",
    templateStr: "section_ambition_c_jfk_political_career_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#ambition-c-jfk-political-career-bg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-political-career-bg-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-political-career-congress-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#kennedy-senate",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1250px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#jackie-kennedy-bio",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#stronger-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1250px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#pulitzer-prize",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#cheating-death",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-political-career-blueOverlay",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-political-career-settle-quote",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 600,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-political-career-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Ambition_C_JFK_Hat_in_the_Ring_DataKeyframes = {
    containerSelectorStr: "#ambition-c-jfk-hat-in-the-ring",
    templateStr: "section_ambition_c_jfk_hat_in_the_ring_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    isSectionHidable: !1,
    isSectionHidable: !1,
    vPlayer: null,
    onInit: function(s) {
        s.$section = $(s.containerSelectorStr)
    },
    onLoad: function(s) {
        s.vPlayer || (s.vPlayer = new FullScreenVideoJSPlayer({
            videoElemString: "ambition-c-jfk-hat-in-the-ring-video-element",
            $videoContainer: $("#ambition-c-jfk-hat-in-the-ring-video-container"),
            $blackBg: $("#ambition-c-jfk-hat-in-the-ring-blackBG"),
            onCompleteCallback: function() {
                window.location.hash = "#!/ambition-d-jfk-campaign-banners"
            }
        }))
    },
    onUnload: function(s) {
        s.vPlayer && (s.vPlayer.pause(), s.vPlayer.dispose(), s.vPlayer = null)
    },
    onShow: function(s) {
        s.$section.css({
            left: "0px"
        }),
        s.vPlayer && (s.vPlayer.resize(), s.vPlayer.play())
    },
    onHide: function(s) {
        s.$section.css({
            left: "1000000px"
        }),
        s.vPlayer && s.vPlayer.pause()
    },
    onUpdate: function() {},
    onResize: function(s) {
        s.vPlayer && s.vPlayer.resize()
    },
    snapPoints: [],
    elements: [{
        selectorString: "#ambition-c-jfk-hat-in-the-ring-video-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-hat-in-the-ring-blackBG",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-hat-in-the-ring-drag-interceptor",
        keyframes: [{
            scrollYPos: 249.99,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250.01,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-hat-in-the-ring-back",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-c-jfk-hat-in-the-ring-continue",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        }]
    }]
},
Ambition_D_JFK_DataKeyframes = {
    containerSelectorStr: "#ambition-d-jfk",
    templateStr: "section_ambition_d_jfk_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#ambition-d-jfk-bgLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-bgRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-blackOverlay",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-cardLeft",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "2000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-2000px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-cardMiddle",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-cardRight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "2000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-2000px"
                }
            }
        }]
    },
    {
        selectorString: "#sinatra-american-dream",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 400,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#election-results-1960",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 425,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#button",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#determined-debater",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 475,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#kennedy-wins",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 375,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-d-jfk-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Ambition_Lockup_DataKeyframes = {
    containerSelectorStr: "#ambition-lockup",
    templateStr: "section_ambition_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#ambition-lockup-LHO-sky",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-background",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-foreground",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-car",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-lho",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-arrowMinsk",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-sky",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-background",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "50px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "50px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-foreground",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-kennedy",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-arrowWash",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-second-class-work",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-where-is-minsk",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-turning-red",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-life-in-minsk",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#marina-oswald-bio",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#ambition-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-inaugural-address",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-flamethrowers-and-snow",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-official-presidential-portrait",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-stovepipe-hat",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    }]
},
Failure_Intro_and_LHO_A_DataKeyframes = {
    containerSelectorStr: "#failure-intro-and-lho-a",
    templateStr: "section_failure_intro_and_lho_a_template",
    SECTION_SCROLLY_LENGTH: 1750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-intro-and-lho-a-background-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-background-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-foreground-worker",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-blackOverlay",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#failure-intro-a-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-fail",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-ure",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-a-chapter-twotitle",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-discharge",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                rotate: -80,
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                rotate: 80,
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-undesirable-discharge",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-polaroid",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                rotate: 80,
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                rotate: -80,
                translate: {
                    x: "0px",
                    y: "1300px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-lee-looks-to-america",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-lees-letter-home",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-letter1-top",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1325,
            styles: {
                translate: {
                    x: "0px",
                    y: "-100px"
                }
            }
        },
        {
            scrollYPos: 1400,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "-30px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "-30px",
                    y: "-1400px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-letter1-highlight",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1325,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-100px"
                }
            }
        },
        {
            scrollYPos: 1400,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 1,
                translate: {
                    x: "-30px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "-30px",
                    y: "-1400px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-letter1-bottom",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1265,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1266,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1325,
            styles: {
                translate: {
                    x: "0px",
                    y: "-100px"
                }
            }
        },
        {
            scrollYPos: 1400,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "-30px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "-30px",
                    y: "-1400px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-letter2-top",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1325,
            styles: {
                translate: {
                    x: "0px",
                    y: "-100px"
                }
            }
        },
        {
            scrollYPos: 1400,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "100px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "100px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-letter2-bottom",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1265,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1266,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1325,
            styles: {
                translate: {
                    x: "0px",
                    y: "-100px"
                }
            }
        },
        {
            scrollYPos: 1400,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "100px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "100px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-envelope",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "1300px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                rotate: 10,
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-quote",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-intro-and-lho-a-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Failure_JFK_A_Cuba_DataKeyframes = {
    containerSelectorStr: "#failure-jfk-a-cuba",
    templateStr: "section_failure_jfk_a_cuba_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-A-JFK-background-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-background-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-foreground-756x578",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-foreground-fidel-castro-bio",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-foreground-communism-on-the-rise",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-castro-556x575",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                rotate: -80,
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                rotate: 80,
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-A-JFK-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Failure_JFK_B_Cuba_Quote_DataKeyframes = {
    containerSelectorStr: "#failure-jfk-b-cuba-quote",
    templateStr: "section_failure_jfk_b_cuba_quote_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-B-JFK-quote-bg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-B-JFK-quote-bg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-B-JFK-quote-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        }]
    }]
},
Failure_JFK_C_Cuba_DataKeyframes = {
    containerSelectorStr: "#failure-jfk-c-cuba",
    templateStr: "section_failure_jfk_c_cuba_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-C-JFK-background-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-background-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-foreground-756x578",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-conquering-communism",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-postStrike-598x413",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: -115,
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: 115,
                translate: {
                    x: "400px",
                    y: "-1500px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-preStrike-624x424",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: 80,
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: -80,
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-allen-dulles-bio",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-C-JFK-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Failure_JFK_D_Bay_of_Pigs_DataKeyframes = {
    containerSelectorStr: "#failure-jfk-d-bay-of-pigs",
    templateStr: "section_failure_jfk_d_bay_of_pigs_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-D-JFK-bop-background-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-D-JFK-bop-background-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-D-JFK-bop-foreground-225x676",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-D-JFK-bop-bay-of-pigs",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-jfk-d-bay-of-pigs-redOverlay",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .5
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: .5
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#failure-jfk-d-bay-of-pigs-quote-jfk",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-jfk-d-bay-of-pigs-quote-burke",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-D-JFK-bop-bay-of-pigs-blunders",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-jfk-d-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Failure_JFK_F_LBJ_Bobby_DataKeyframes = {
    containerSelectorStr: "#failure-jfk-f-lbj-bobby",
    templateStr: "section_failure_jfk_f_lbj_bobby_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-E-JFK-background-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-E-JFK-background-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-E-JFK-foreground-left-756x539",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-E-JFK-foreground-right-503x571",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-jfk-f-lbj-bobby-vs",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#lbj-bio",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#bobby-bio",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-jfk-f-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Failure_Lockup_DataKeyframes = {
    containerSelectorStr: "#failure-lockup",
    templateStr: "section_failure_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#failure-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-JFK-sky-1200x507"
    },
    {
        selectorString: "#failure-lockup-LHO-sky-1200x685"
    },
    {
        selectorString: "#failure-lockup-JFK-bgBeach-1200x143"
    },
    {
        selectorString: "#failure-lockup-LHO-bgWater-1200x143"
    },
    {
        selectorString: "#failure-lockup-JFK-bgSoldiers-407x459"
    },
    {
        selectorString: "#failure-lockup-JFK-leader-240x552"
    },
    {
        selectorString: "#failure-lockup-smoke3"
    },
    {
        selectorString: "#failure-lockup-smoke2"
    },
    {
        selectorString: "#failure-lockup-smoke1"
    },
    {
        selectorString: "#failure-lockup-LHO-ship-1200x437"
    },
    {
        selectorString: "#failure-lockup-JFK-fgBeach-1200x234"
    },
    {
        selectorString: "#failure-lockup-LHO-fgWater-1200x234"
    },
    {
        selectorString: "#failure-lockup-JFK-prisoners1-383x841"
    },
    {
        selectorString: "#failure-lockup-JFK-prisoners2-392x631"
    },
    {
        selectorString: "#failure-lockup-JFK-prisoners3-264x440"
    },
    {
        selectorString: "#failure-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-arrowBop-338x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-arrowMaasdam-338x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#failure-lockup-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-real-patriot",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-disillusions-of-grandeur",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#oswald-texas-bound",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-beachfront-battle",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-defeat-is-an-orphan",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-wept",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-lessons-of-defeat",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#jfk-kennedy-brothers",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    }]
},
Adversity_Intro_and_LHO_Dallas_DataKeyframes = {
    containerSelectorStr: "#adversity-intro-and-lho-dallas",
    templateStr: "section_adversity_intro_and_lho_dallas_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#adversity-intro-and-lho-dallas-lho-bg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-lho-fg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-jfk-bg-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-equipment-85x33",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-tentareas-89x32",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-lho-bg-right",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-lho-fg-right",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-blackOverlay",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-adve",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-rsity",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-chaptertitle",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-unnoticed",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-LHO-polaroid-551x438",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1300px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1300px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-secondary-sec1",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 925,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-secondary-sec2",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 950,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-secondary-sec3",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 975,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-intro-and-lho-dallas-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Adversity_JFK_A_CMC_DataKeyframes = {
    containerSelectorStr: "#adversity-jfk-a-CMC",
    templateStr: "section_adversity_jfk_a_CMC_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#adversity-jfk-a-CMC-bg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-CMC-bg-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-largesign-462x176",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-ele1-213x31",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-ele2-216x32",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-missiletrailers-143x33",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-equipment-85x33",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-tentareas-89x32",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-CMC-begins",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-CMC-sec1",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-CMC-sec2",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1500px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1500px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-A-JFK-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Adversity_JFK_A_Quote_DataKeyframes = {
    containerSelectorStr: "#adversity-jfk-a-quote",
    templateStr: "section_adversity_jfk_a_quote_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#adversity-jfk-a-quote-bg-left",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-quote-bg-right",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-quote-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        }]
    }]
},
Adversity_JFK_A_Video_DataKeyframes = {
    containerSelectorStr: "#adversity-jfk-a-video",
    templateStr: "section_adversity_jfk_a_video_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    isSectionHidable: !1,
    vPlayer: null,
    onInit: function(s) {
        s.$section = $(s.containerSelectorStr)
    },
    onLoad: function(s) {
        s.vPlayer || (s.vPlayer = new FullScreenVideoJSPlayer({
            videoElemString: "adversity-jfk-a-video-video-element",
            $videoContainer: $("#adversity-jfk-a-video-video-container"),
            $blackBg: $("#adversity-jfk-a-video-blackBG"),
            onCompleteCallback: function() {
                window.location.hash = "#!/adversity-lockup-intro"
            }
        }))
    },
    onUnload: function(s) {
        s.vPlayer && (s.vPlayer.pause(), s.vPlayer.dispose(), s.vPlayer = null)
    },
    onShow: function(s) {
        s.$section.css({
            left: "0px"
        }),
        s.vPlayer && (s.vPlayer.resize(), s.vPlayer.play())
    },
    onHide: function(s) {
        s.$section.css({
            left: "1000000px"
        }),
        s.vPlayer && s.vPlayer.pause()
    },
    onUpdate: function() {},
    onResize: function(s) {
        s.vPlayer && s.vPlayer.resize()
    },
    snapPoints: [],
    elements: [{
        selectorString: "#adversity-jfk-a-video-video-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-video-blackBG",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-video-drag-interceptor",
        keyframes: [{
            scrollYPos: 249.99,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250.01,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-video-back",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-jfk-a-video-continue",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        }]
    }]
},
Adversity_Lockup_DataKeyframes = {
    containerSelectorStr: "#adversity-lockup",
    templateStr: "section_adversity_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#adversity-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-bgsky-1200x640"
    },
    {
        selectorString: "#adversity-lockup-JFK-bgwater-1300x532"
    },
    {
        selectorString: "#adversity-lockup-JFK-boat-814x534"
    },
    {
        selectorString: "#adversity-lockup-JFK-fg-1450x398"
    },
    {
        selectorString: "#adversity-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sky-1200x660"
    },
    {
        selectorString: "#adversity-lockup-LHO-bg-right-1090x562"
    },
    {
        selectorString: "#adversity-lockup-LHO-bg-left-488x900"
    },
    {
        selectorString: "#adversity-lockup-LHO-mg-right-662x743"
    },
    {
        selectorString: "#adversity-lockup-LHO-fg-right-603x863"
    },
    {
        selectorString: "#adversity-lockup-LHO-lamppost-386x617"
    },
    {
        selectorString: "#adversity-lockup-LHO-man-107x242"
    },
    {
        selectorString: "#adversity-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-arrowKW-269x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-arrowNO-269x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-LHO-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec7",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec9",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#adversity-lockup-JFK-sec10",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "750px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1000px"
                }
            }
        }]
    }]
},
Loveloss_Intro_and_A_DataKeyframes = {
    containerSelectorStr: "#loveloss-intro-and-a",
    templateStr: "section_loveloss_intro_and_a_template",
    SECTION_SCROLLY_LENGTH: 2e3,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "loveloss-intro-and-a-poem"
    },
    {
        scrollPosY: 500,
        hashString: "loveloss-intro-and-a-chapter"
    },
    {
        scrollPosY: 750,
        hashString: "loveloss-intro-and-a-captions"
    },
    {
        scrollPosY: 1e3,
        hashString: "loveloss-intro-and-a-to-have"
    },
    {
        scrollPosY: 1250,
        hashString: "loveloss-intro-and-a-until-death"
    },
    {
        scrollPosY: 1500,
        hashString: "loveloss-intro-and-a-born-out"
    },
    {
        scrollPosY: 1750,
        hashString: "loveloss-intro-and-a-oval-office"
    }],
    elements: [{
        selectorString: "#loveloss-A-JFK-familyBg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-JFK-kennedys-575x680",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-LHO-familyBg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-LHO-oswalds-334x686",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-blackOverlayFull",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-chaptertitle-99x15",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-love-230x60",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-loss-245x60",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-lee-and-marina-caption",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-royal-family-caption",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-blackOverlayRight",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-to-have-to-hold",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-blackOverlayLeft",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-until-death",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-JFK-polaroid-444x567",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                rotate: -40,
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                rotate: 40,
                translate: {
                    x: "300px",
                    y: "-1000px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-LHO-leftFocus-600x900",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "-600px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-born-out-of-love",
        keyframes: [{
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-JFK-leftbg-600x900",
        keyframes: [{
            scrollYPos: 1499,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-JFK-rightbg-600x900",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-A-JFK-kids-334x418",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 1625,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-kennedy-children-caption",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                opacity: 0,
                translate: {
                    x: "-100%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1501,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "150%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-location-identifier-c",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-oval-office-JFK-sec1",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 1700,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-oval-office-JFK-sec2",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 1700,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-oval-office-JFK-sec3",
        keyframes: [{
            scrollYPos: 1499,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-oval-office-JFK-sec4",
        keyframes: [{
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 1700,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-and-a-oval-office-JFK-sec5",
        keyframes: [{
            scrollYPos: 1499,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 2e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-location-identifier-a",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-intro-location-identifier-b",
        keyframes: [{
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Loveloss_LHO_B_DataKeyframes = {
    containerSelectorStr: "#loveloss-lho-b",
    templateStr: "section_loveloss_lho_b_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "loveloss-lho-b-rough-waters"
    },
    {
        scrollPosY: 500,
        hashString: "loveloss-lho-b-secondary"
    }],
    elements: [{
        selectorString: "#loveloss-B-LHO-leftbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-B-LHO-rightbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-B-LHO-rough-waters",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-B-LHO-polaroid-395x503",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: 60,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: -60,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lho-b-secondary-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 400,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lho-b-secondary-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 425,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lho-b-secondary-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lho-b-secondary-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 475,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-B-LHO-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Loveloss_JFK_B_DataKeyframes = {
    containerSelectorStr: "#loveloss-jfk-b",
    templateStr: "section_loveloss_jfk_b_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#loveloss-B-JFK-leftbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-B-JFK-rightbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-jfk-b-jacks-birthday",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-jfk-b-secondary-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-jfk-b-secondary-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 475,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-jfk-b-secondary-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-jfk-b-secondary-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Loveloss_Lockup_DataKeyframes = {
    containerSelectorStr: "#loveloss-lockup",
    templateStr: "section_loveloss_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#loveloss-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-bg-1200x900"
    },
    {
        selectorString: "#loveloss-lockup-JFK-photographers-670x561"
    },
    {
        selectorString: "#loveloss-lockup-JFK-jfk-446x651"
    },
    {
        selectorString: "#loveloss-lockup-JFK-guards-1104x814"
    },
    {
        selectorString: "#loveloss-lockup-JFK-railing-802x900"
    },
    {
        selectorString: "#loveloss-lockup-LHO-bg-1200x900"
    },
    {
        selectorString: "#loveloss-lockup-LHO-lho-477x900"
    },
    {
        selectorString: "#loveloss-lockup-LHO-door-756x900"
    },
    {
        selectorString: "#loveloss-lockup-LHO-leftdoor-86x900"
    },
    {
        selectorString: "#loveloss-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-arrowOAB-262x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-arrowDallas-262x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#loveloss-lockup-JFK-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    }]
},
Conviction_Intro_and_A_JFK_DataKeyframes = {
    containerSelectorStr: "#conviction-intro-and-a-jfk",
    templateStr: "section_conviction_intro_and_a_jfk_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "conviction-intro-and-a-jfk-poem"
    },
    {
        scrollPosY: 500,
        hashString: "conviction-intro-and-a-jfk-chapter"
    },
    {
        scrollPosY: 750,
        hashString: "conviction-intro-and-a-jfk-black-and-white"
    },
    {
        scrollPosY: 1e3,
        hashString: "conviction-intro-and-a-jfk-secondary"
    }],
    elements: [{
        selectorString: "#conviction-A-JFK-crbg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-JFK-crfg-right-366x548",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-LHO-bgleft-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-LHO-fg-687x705",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-blackOverlayFull",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#conviction-intro-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-chaptertitle-99x15",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#conviction-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-convi-269x60",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-ction-280x60",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-JFK-crbg-left-600x900",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-JFK-crfg-left-470x900",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-black-and-white",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-secondary-JFK-sec1",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 925,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-secondary-JFK-sec2",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 950,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-secondary-JFK-sec4",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 975,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-intro-and-a-jfk-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Conviction_A_JFK_Quote_DataKeyframes = {
    containerSelectorStr: "#conviction-a-jfk-quote",
    templateStr: "section_conviction_a_jfk_quote_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "conviction-a-jfk-quote"
    }],
    elements: [{
        selectorString: "#conviction-A-JFK-quote-leftbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-JFK-quote-rightbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-jfk-quote-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    }]
},
Conviction_A_LHO_DataKeyframes = {
    containerSelectorStr: "#conviction-a-lho",
    templateStr: "section_conviction_a_lho_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "conviction-a-lho-lee-and-hidell"
    },
    {
        scrollPosY: 500,
        hashString: "conviction-a-lho-secondary"
    }],
    elements: [{
        selectorString: "#conviction-A-LHO-bgleft-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-LHO-fg-687x705",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-lho-lee-and-hidell",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-200%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "200%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-LHO-bgright-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-LHO-fg-right-635x935",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-LHO-license-555x398",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: 50,
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: -50,
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-A-LHO-sscard-346x248",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                rotate: -50,
                translate: {
                    x: "0px",
                    y: "1600px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                rotate: 50,
                translate: {
                    x: "0px",
                    y: "-1600px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-lho-secondary-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-lho-secondary-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 475,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-lho-secondary-LHO-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-a-lho-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Conviction_B_JFK_Berlin_DataKeyframes = {
    containerSelectorStr: "#conviction-b-jfk-berlin",
    templateStr: "section_conviction_b_jfk_berlin_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "conviction-b-jfk-berlin-quote"
    },
    {
        scrollPosY: 500,
        hashString: "conviction-b-jfk-berlin-secondary"
    }],
    elements: [{
        selectorString: "#conviction-B-JFK-quote-leftbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-B-JFK-quote-rightbg-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-b-jfk-berlin-redOverlay",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .5
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#conviction-b-jfk-berlin-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-b-jfk-berlin-secondary-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-b-jfk-berlin-secondary-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-b-jfk-berlin-location-identifier-a",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Conviction_Lockup_DataKeyframes = {
    containerSelectorStr: "#conviction-lockup",
    templateStr: "section_conviction_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [{
        scrollPosY: 250,
        hashString: "conviction-lockup-intro"
    },
    {
        scrollPosY: 500,
        hashString: "conviction-lockup",
        isLockupParallaxEnabled: !0
    }],
    elements: [{
        selectorString: "#conviction-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-JFK-bg-1200x900"
    },
    {
        selectorString: "#conviction-lockup-JFK-mg-415x747"
    },
    {
        selectorString: "#conviction-lockup-JFK-fg-849x738"
    },
    {
        selectorString: "#conviction-lockup-LHO-sky-1200x735"
    },
    {
        selectorString: "#conviction-lockup-LHO-mg-1350x900"
    },
    {
        selectorString: "#conviction-lockup-LHO-lho-264x587"
    },
    {
        selectorString: "#conviction-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-arrowWash-243x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-arrowDallas-243x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-LHO-sec9",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#conviction-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    }]
},
Fate_Intro_and_A_JFK_DataKeyframes = {
    containerSelectorStr: "#fate-intro-and-a-jfk",
    templateStr: "section_fate_intro_and_a_jfk_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-A-JFK-skybg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-A-JFK-fgrunway-right-600x610",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-and-a-jfk-LHO-bg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-blackOverlayFull",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: .7
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-intro-poem",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1,
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-chaptertitle-99x14",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 525,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-intro-subtext-left",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-subtext-right",
        keyframes: [{
            scrollYPos: 425,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-fa-90x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-te-90x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 625,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-A-JFK-skybg-left-600x900",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-A-JFK-fgrunway-left-600x610",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-taking-on-texas",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-and-a-jfk-secondary-JFK-sec1",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-and-a-jfk-secondary-JFK-sec2",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-and-a-jfk-secondary-JFK-sec3",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-and-a-jfk-secondary-JFK-sec4",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-intro-location-identifier-a",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Fate_B_LHO_Job_DataKeyframes = {
    containerSelectorStr: "#fate-lho-b-job",
    templateStr: "section_fate_lho_b_job_template",
    SECTION_SCROLLY_LENGTH: 1e3,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-B-LHO-bg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-B-LHO-bg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-job-lee-finds-work",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-job-secondary-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-job-secondary-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-job-secondary-LHO-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-job-left-alone",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "250%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lho-b-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Fate_A_JFK_Quote_DataKeyframes = {
    containerSelectorStr: "#fate-jfk-a-quote",
    templateStr: "section_fate_jfk_a_quote_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-A-JFK-quotebg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-A-JFK-quotebg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-jfk-a-quote-quote",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    }]
},
Fate_B_JFK_Trip_DataKeyframes = {
    containerSelectorStr: "#fate-jfk-b-trip",
    templateStr: "section_fate_jfk_b_trip_template",
    SECTION_SCROLLY_LENGTH: 1e3,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-B-JFK-bg-left-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-B-JFK-bg-right-600x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-jfk-b-trip-jackie-spotlight",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0%",
                    y: "-250%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-jfk-b-trip-secondary-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-jfk-b-trip-dotes-on-jack",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-150%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-A-JFK-crowd-polaroid-477x602",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                rotate: -20,
                translate: {
                    x: "0px",
                    y: "1000px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                rotate: 0,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                rotate: 20,
                translate: {
                    x: "200px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-jfk-b-location-identifier-a",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "-125%",
                    y: "0%"
                }
            }
        }]
    }]
},
Fate_Dealey_Video_DataKeyframes = {
    containerSelectorStr: "#fate-dealey-video",
    templateStr: "section_fate_dealey_video_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    isSectionHidable: !1,
    isSectionHidable: !1,
    vPlayer: null,
    onInit: function(s) {
        s.$section = $(s.containerSelectorStr)
    },
    onLoad: function(s) {
        s.vPlayer || (s.vPlayer = new FullScreenVideoJSPlayer({
            videoElemString: "fate-dealey-video-element",
            $videoContainer: $("#fate-dealey-video-container"),
            $blackBg: $("#fate-dealey-video-blackBG"),
            onCompleteCallback: function() {
                window.location.hash = "#!/fate-dealey-aerial-lockup"
            }
        }))
    },
    onUnload: function(s) {
        s.vPlayer && (s.vPlayer.pause(), s.vPlayer.dispose(), s.vPlayer = null)
    },
    onShow: function(s) {
        s.$section.css({
            left: "0px"
        }),
        s.vPlayer && (s.vPlayer.resize(), s.vPlayer.play())
    },
    onHide: function(s) {
        s.$section.css({
            left: "1000000px"
        }),
        s.vPlayer && s.vPlayer.pause()
    },
    onUpdate: function() {},
    onResize: function(s) {
        s.vPlayer && s.vPlayer.resize()
    },
    snapPoints: [{
        scrollPosY: 250,
        hashString: "fate-dealey-video"
    }],
    elements: [{
        selectorString: "#fate-dealey-video-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-video-blackBG",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-video-drag-interceptor",
        keyframes: [{
            scrollYPos: 249.99,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250.01,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#fate-dealey-video-back",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-video-continue",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        }]
    }]
},
Fate_Lockup_Dealey_Aerial_DataKeyframes = {
    containerSelectorStr: "#fate-dealey-aerial-lockup",
    templateStr: "section_fate_dealey_aerial_lockup_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-lockup-dealey03-bg-1800x433",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey03-fg-1800x900",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey03-motorcade-130x143",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-aerial-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-aerial-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-aerial-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-aerial-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 20,
                    y: 20
                }
            }
        }]
    }]
},
Fate_Lockup_Dealey_Ground_DataKeyframes = {
    containerSelectorStr: "#fate-dealey-ground-lockup",
    templateStr: "section_fate_dealey_ground_lockup_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-lockup-dealey01-bg-1800x900",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 7,
                    y: 7
                },
                translate: {
                    x: "75px",
                    y: "150px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey01-mg-1800x900",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                },
                translate: {
                    x: "75px",
                    y: "150px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey01-motorcadebg-146x72",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                },
                translate: {
                    x: "75px",
                    y: "450px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey01-motorcade-590x210",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                },
                translate: {
                    x: "75px",
                    y: "450px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey01-people-1110x467",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                },
                translate: {
                    x: "75px",
                    y: "450px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec5",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-ground-lockup-JFK-sec6",
        keyframes: [{
            scrollYPos: 250,
            easing: TWEEN.Easing.Cubic.In,
            styles: {
                scale: {
                    x: 1,
                    y: 1
                },
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 450,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 0,
                scale: {
                    x: 25,
                    y: 25
                }
            }
        }]
    }]
},
Fate_Lockup_Dealey_Window_DataKeyframes = {
    containerSelectorStr: "#fate-dealey-window-lockup",
    templateStr: "section_fate_dealey_window_lockup_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-lockup-dealey02-bg-1166x738",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey02-motorcade-291x222",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey02-fgwindow-1800x900",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup-dealey02-rifle-794x540",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-dealey-window-lockup-JFK-sec7",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    }]
},
Fate_Aftermath_DataKeyframes = {
    containerSelectorStr: "#fate-aftermath-lockup",
    templateStr: "section_fate_aftermath_lockup_template",
    SECTION_SCROLLY_LENGTH: 750,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-aftermath-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup01-JFK-bg-927x614"
    },
    {
        selectorString: "#fate-lockup01-JFK-mgbuilding-1200x900"
    },
    {
        selectorString: "#fate-lockup01-JFK-fgofficer-527x490"
    },
    {
        selectorString: "#fate-lockup01-JFK-fgleft-353x491"
    },
    {
        selectorString: "#fate-lockup01-LHO-bg-1200x900"
    },
    {
        selectorString: "#fate-lockup01-LHO-mg-left-429x562"
    },
    {
        selectorString: "#fate-lockup01-LHO-mg-right-445x562"
    },
    {
        selectorString: "#fate-lockup01-LHO-fg-1158x360"
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup01-arrowJFK-282x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup01-arrowLHO-282x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup01-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-LHO-sec6",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-JFK-sec3",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-lockup-JFK-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        }]
    }]
},
Fate_Aftermath_Video_DataKeyframes = {
    containerSelectorStr: "#fate-aftermath-video",
    templateStr: "section_fate_aftermath_video_template",
    SECTION_SCROLLY_LENGTH: 500,
    START_POS_OFFSET: -250,
    isSectionHidable: !1,
    isSectionHidable: !1,
    vPlayer: null,
    onInit: function(s) {
        s.$section = $(s.containerSelectorStr)
    },
    onLoad: function(s) {
        s.vPlayer || (s.vPlayer = new FullScreenVideoJSPlayer({
            videoElemString: "fate-aftermath-video-element",
            $videoContainer: $("#fate-aftermath-video-container"),
            $blackBg: $("#fate-aftermath-video-blackBG"),
            onCompleteCallback: function() {
                window.location.hash = "#!/fate-laid-to-rest-lockup-intro"
            }
        }))
    },
    onUnload: function(s) {
        s.vPlayer && (s.vPlayer.pause(), s.vPlayer.dispose(), s.vPlayer = null)
    },
    onShow: function(s) {
        s.$section.css({
            left: "0px"
        }),
        s.vPlayer && (s.vPlayer.resize(), s.vPlayer.play())
    },
    onHide: function(s) {
        s.$section.css({
            left: "1000000px"
        }),
        s.vPlayer && s.vPlayer.pause()
    },
    onUpdate: function() {},
    onResize: function(s) {
        s.vPlayer && s.vPlayer.resize()
    },
    snapPoints: [{
        scrollPosY: 250,
        hashString: "fate-aftermath-video"
    }],
    elements: [{
        selectorString: "#fate-aftermath-video-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-video-blackBG",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "-900px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-video-drag-interceptor",
        keyframes: [{
            scrollYPos: 249.99,
            styles: {
                opacity: 1
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250.01,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-video-back",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "-50px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-aftermath-video-continue",
        keyframes: [{
            scrollYPos: 200,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 300,
            styles: {
                translate: {
                    x: "0px",
                    y: "50px"
                }
            }
        }]
    }]
},
Fate_Laid_to_Rest_DataKeyframes = {
    containerSelectorStr: "#fate-laid-to-rest-lockup",
    templateStr: "section_fate_laid_to_rest_lockup_template",
    SECTION_SCROLLY_LENGTH: 1250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-laid-to-rest-lockup-right-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-left-container",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "0px",
                    y: "900px"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup02-JFK-bg-1200x421"
    },
    {
        selectorString: "#fate-lockup02-JFK-mg-people-1200x672"
    },
    {
        selectorString: "#fate-lockup02-JFK-mg-coffin-1043x476"
    },
    {
        selectorString: "#fate-lockup02-JFK-fg-left-168x423"
    },
    {
        selectorString: "#fate-lockup02-JFK-fg-middle-168x423"
    },
    {
        selectorString: "#fate-lockup02-JFK-fg-right-178x423"
    },
    {
        selectorString: "#fate-lockup02-LHO-bg-1200x900"
    },
    {
        selectorString: "#fate-lockup02-LHO-bgbush-516x632"
    },
    {
        selectorString: "#fate-lockup02-LHO-bgpb-201x273"
    },
    {
        selectorString: "#fate-lockup02-LHO-pb-1132x680"
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-LHO-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "-100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-caption",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                translate: {
                    x: "100%",
                    y: "150%"
                }
            }
        },
        {
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-lockup02-arrowJFK-243x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "-1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-lockup02-arrowLHO-243x58",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "1200px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-lockup02-instructions",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1100px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0px",
                    y: "0px"
                },
                opacity: 1
            }
        },
        {
            scrollYPos: 550,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1100px"
                }
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-LHO-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-LHO-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "-1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-sec1",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-sec2",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-sec5",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-sec4",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-lockup-JFK-sec7",
        keyframes: [{
            scrollYPos: 250,
            styles: {
                translate: {
                    x: "0px",
                    y: "1200px"
                }
            }
        },
        {
            scrollYPos: 500,
            styles: {
                opacity: 1,
                translate: {
                    x: "0px",
                    y: "0px"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: 0
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-blackOverlay",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 750,
            styles: {
                opacity: .75
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                opacity: 1
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-fact",
        keyframes: [{
            scrollYPos: 500,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    },
    {
        selectorString: "#fate-laid-to-rest-poem",
        keyframes: [{
            scrollYPos: 750,
            styles: {
                translate: {
                    x: "0%",
                    y: "125%"
                }
            }
        },
        {
            scrollYPos: 1e3,
            styles: {
                translate: {
                    x: "0%",
                    y: "0%"
                }
            }
        },
        {
            scrollYPos: 1250,
            styles: {
                translate: {
                    x: "0%",
                    y: "-125%"
                }
            }
        }]
    }]
},
Fate_Eternal_Flame_DataKeyframes = {
    containerSelectorStr: "#fate-eternal-flame",
    templateStr: "section_fate_eternal_flame_template",
    SECTION_SCROLLY_LENGTH: 250,
    START_POS_OFFSET: -250,
    onInit: function() {},
    onShow: function() {},
    onHide: function() {},
    onUpdate: function() {},
    snapPoints: [],
    elements: [{
        selectorString: "#fate-eternal-flame-img",
        keyframes: [{
            scrollYPos: 0,
            styles: {
                opacity: 0
            }
        },
        {
            scrollYPos: 250,
            styles: {
                opacity: 1
            }
        }]
    }]
},
CHAPTER_DATA = [{
    name: "Intro",
    sections: [Premiere_Screen_DataKeyframes, RWD_Video_DataKeyframes, TitleScreen_DataKeyframes]
},
{
    name: "Ambition",
    sections: [Ambition_Intro_and_JFK_A_DataKeyframes, Ambition_A_LHO_DataKeyframes]
},



{
    name: "Love & Loss",
    sections: [Loveloss_Intro_and_A_DataKeyframes, Loveloss_LHO_B_DataKeyframes]
},
{
    name: "Conviction",
    sections: [Conviction_Intro_and_A_JFK_DataKeyframes, Conviction_A_JFK_Quote_DataKeyframes, Conviction_A_LHO_DataKeyframes, Conviction_B_JFK_Berlin_DataKeyframes, Conviction_Lockup_DataKeyframes]
},
{
    name: "Fate",
    sections: [Fate_Aftermath_Video_DataKeyframes]
}
];