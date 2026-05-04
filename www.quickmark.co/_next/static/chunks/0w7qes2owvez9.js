(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 824182, e => {
    "use strict";
    let t = (0, e.i(768834).create)(e => ({
        isOnline: window.navigator.onLine,
        isStandalone: !1,
        installPromptEvent: null,
        updateReady: !1,
        installOutcome: "idle",
        setOnline: t => e({
            isOnline: t
        }),
        setStandalone: t => e({
            isStandalone: t
        }),
        setInstallPromptEvent: t => e({
            installPromptEvent: t
        }),
        setUpdateReady: t => e({
            updateReady: t
        }),
        setInstallOutcome: t => e({
            installOutcome: t
        })
    }));
    e.s(["usePwaStore", 0, t])
}, 769830, e => {
    "use strict";
    var t = e.i(768834);
    let r = "Paper integrity check failed:",
        a = "Question integrity check failed:";

    function s(e, t) {
        return e && t && e !== t ? `${r} QP ${e} does not match MS ${t}.` : null
    }

    function i(e) {
        let t = (e ? ? "").split(" | ").map(e => e.trim()).filter(Boolean),
            s = null,
            i = null,
            n = [];
        for (let e of t) {
            if (e.startsWith(r)) {
                s = e;
                continue
            }
            if (e.startsWith(a)) {
                i = e;
                continue
            }
            n.push(e)
        }
        return {
            paper: s,
            question: i,
            other: n
        }
    }

    function n(e) {
        let t = [e.paper, e.question, ...e.other].filter(Boolean);
        return t.length > 0 ? t.join(" | ") : null
    }
    let o = {
            phase: "idle",
            matchId: null,
            subjectCode: null,
            paperType: null,
            paperId: null,
            msPaperId: null,
            gameId: null,
            paperUrl: null,
            audioUrl: null,
            questionSetHash: null,
            servedQuestionSetHash: null,
            servedQuestionSnippets: [],
            optionOrderSource: "unknown",
            qpMetadata: null,
            msMetadata: null,
            extractionDiagnostics: null,
            integrityError: null,
            totalDurationMs: null,
            totalQuestions: null,
            startEpoch: null,
            isFriendMatch: !1,
            selfId: null,
            opponent: null,
            opponentDisconnected: !1,
            answers: {},
            opponentAnswered: 0,
            queuePreferences: [],
            result: null,
            matchFoundAt: null,
            submitted: !1,
            submitPending: !1,
            opponentSubmitted: !1,
            correctAnswers: {},
            resultDismissed: !1,
            socketSubmitAnswer: null,
            socketResign: null,
            socketSubmitMatch: null,
            socketJoinQueue: null,
            socketLeaveQueue: null,
            socketIsConnected: !1,
            socketLongWait: !1,
            socketOnlineCount: null,
            showFriendMatch: !1,
            maintenanceNotice: null,
            lastIgnoredEventReason: null
        },
        l = (0, t.create)(e => ({ ...o,
            setSocketCallbacks: t => e({
                socketSubmitAnswer: t.submitAnswer,
                socketResign: t.resign,
                socketSubmitMatch: t.submitMatch,
                socketJoinQueue: t.joinQueue,
                socketLeaveQueue: t.leaveQueue
            }),
            setConnectionState: t => e(e => ({
                socketIsConnected: t.isConnected,
                socketLongWait: t.longWait,
                socketOnlineCount: t.onlineCount,
                submitPending: !!t.isConnected && e.submitPending
            })),
            setShowFriendMatch: t => e({
                showFriendMatch: t
            }),
            setMaintenanceNotice: t => e({
                maintenanceNotice: t
            }),
            clearMaintenanceNotice: () => e({
                maintenanceNotice: null
            }),
            setLastIgnoredEventReason: t => e({
                lastIgnoredEventReason: t
            }),
            setSelfId: t => e({
                selfId: t
            }),
            setQueuePreferences: t => e({
                queuePreferences: t
            }),
            startQueuing: () => e({
                phase: "queuing"
            }),
            onMatchFound: t => e(e => {
                if ("active" === e.phase || "result" === e.phase) return e;
                let r = "queuing" === e.phase,
                    a = t.isFriendMatch && ("idle" === e.phase || "queuing" === e.phase);
                return r || a ? {
                    phase: "battle_card",
                    matchId: t.matchId,
                    subjectCode: t.subjectCode,
                    paperType: t.paperType,
                    isFriendMatch: t.isFriendMatch,
                    opponent: t.opponent,
                    matchFoundAt: Date.now()
                } : e
            }),
            onMatchStart: t => e(e => {
                if (e.matchId && e.matchId !== t.matchId) return e;
                let r = t.paperId || null,
                    a = t.paperUrl || (r ? `/api/ranked/paper/${r}` : null);
                if (!r || !a) return e;
                let i = t.startEpoch && t.startEpoch > 0 ? t.startEpoch : Date.now(),
                    n = t.totalQuestions && t.totalQuestions > 0 ? t.totalQuestions : e.totalQuestions ? ? 0;
                return n <= 0 ? e : {
                    phase: "active",
                    matchId: t.matchId,
                    subjectCode: t.subjectCode ? ? e.subjectCode,
                    paperType: t.paperType ? ? e.paperType,
                    isFriendMatch: t.isFriendMatch ? ? e.isFriendMatch,
                    paperId: r,
                    msPaperId: t.msPaperId ? ? r,
                    gameId: t.gameId ? ? null,
                    paperUrl: a,
                    audioUrl: t.audioUrl ? ? null,
                    questionSetHash: t.questionSetHash ? ? t.questionSetSignature ? ? null,
                    optionOrderSource: t.optionOrderSource ? ? "unknown",
                    qpMetadata: t.qpMetadata ? ? null,
                    msMetadata: t.msMetadata ? ? null,
                    extractionDiagnostics: t.extraction ? ? null,
                    integrityError: s(r, t.msPaperId ? ? r),
                    servedQuestionSetHash: null,
                    servedQuestionSnippets: [],
                    totalDurationMs: t.totalDurationMs ? ? null,
                    totalQuestions: n,
                    startEpoch: i
                }
            }),
            onAnswerAck: (t, r, a) => {
                a || e(e => {
                    if (e.matchId !== t) return e;
                    let a = { ...e.answers
                    };
                    return delete a[r], {
                        answers: a
                    }
                })
            },
            onOpponentProgress: (t, r) => e(e => e.matchId !== t ? e : {
                opponentAnswered: r
            }),
            onOpponentDisconnected: t => e(e => e.matchId !== t ? e : {
                opponentDisconnected: !0
            }),
            onOpponentReconnected: t => e(e => e.matchId !== t ? e : {
                opponentDisconnected: !1
            }),
            onOpponentSubmitted: t => e(e => e.matchId !== t ? e : {
                opponentSubmitted: !0
            }),
            onSubmitAck: (t, r) => e(e => e.matchId !== t ? e : r ? {
                submitted: !0,
                submitPending: !1
            } : {
                submitPending: !1
            }),
            onRequeued: () => e(e => ({ ...o,
                selfId: e.selfId,
                queuePreferences: e.queuePreferences,
                phase: "queuing"
            })),
            onStateRestore: t => e(e => {
                var r;
                if ("result" === e.phase && e.matchId === t.matchId || e.matchId && e.matchId !== t.matchId && "idle" !== e.phase) return e;
                let a = t.paperId || null,
                    i = t.paperUrl || (a ? `/api/ranked/paper/${a}` : null);
                return (r = {
                    startEpoch: t.startEpoch,
                    paperId: a,
                    paperUrl: i,
                    totalQuestions: t.totalQuestions
                }).paperId && r.paperUrl && r.totalQuestions && !(r.totalQuestions <= 0) && r.startEpoch && !(r.startEpoch <= 0) && 1 ? {
                    phase: "active",
                    matchId: t.matchId,
                    answers: t.answers,
                    submitted: t.submitted ? ? !1,
                    submitPending: !1,
                    opponentSubmitted: t.opponentSubmitted ? ? !1,
                    startEpoch: t.startEpoch,
                    paperId: a,
                    msPaperId: t.msPaperId ? ? a,
                    gameId: t.gameId ? ? null,
                    paperUrl: i,
                    audioUrl: t.audioUrl ? ? null,
                    questionSetHash: t.questionSetHash ? ? t.questionSetSignature ? ? null,
                    optionOrderSource: t.optionOrderSource ? ? "unknown",
                    qpMetadata: t.qpMetadata ? ? null,
                    msMetadata: t.msMetadata ? ? null,
                    extractionDiagnostics: t.extraction ? ? null,
                    integrityError: s(a, t.msPaperId ? ? a),
                    servedQuestionSetHash: null,
                    servedQuestionSnippets: [],
                    totalDurationMs: t.totalDurationMs ? ? null,
                    totalQuestions: t.totalQuestions,
                    isFriendMatch: t.isFriendMatch,
                    opponent: t.opponent,
                    subjectCode: t.subjectCode,
                    paperType: t.paperType,
                    opponentAnswered: t.opponentAnswered
                } : "active" === e.phase || "result" === e.phase ? e : {
                    phase: "battle_card",
                    matchId: t.matchId,
                    subjectCode: t.subjectCode,
                    paperType: t.paperType,
                    isFriendMatch: t.isFriendMatch,
                    opponent: t.opponent,
                    matchFoundAt: e.matchFoundAt ? ? Date.now(),
                    opponentAnswered: t.opponentAnswered
                }
            }),
            onMatchResult: t => {
                e(e => e.matchId && e.matchId !== t.matchId ? e : {
                    phase: "result",
                    result: t,
                    correctAnswers: t.correctAnswers ? ? {},
                    paperId: t.paperId ? ? e.paperId,
                    msPaperId: t.msPaperId ? ? t.paperId ? ? e.msPaperId,
                    gameId: t.gameId ? ? e.gameId,
                    questionSetHash: t.questionSetHash ? ? t.questionSetSignature ? ? e.questionSetHash,
                    optionOrderSource: t.optionOrderSource ? ? e.optionOrderSource ? ? "unknown",
                    qpMetadata: t.qpMetadata ? ? e.qpMetadata,
                    msMetadata: t.msMetadata ? ? e.msMetadata,
                    extractionDiagnostics: t.extraction ? ? e.extractionDiagnostics,
                    integrityError: (() => {
                        if (t.integrityError) return t.integrityError;
                        let r = s(t.paperId ? ? e.paperId, t.msPaperId ? ? t.paperId ? ? e.msPaperId),
                            a = i(e.integrityError);
                        return n({
                            paper: r,
                            question: a.question,
                            other: a.other
                        })
                    })(),
                    resultDismissed: !1,
                    submitPending: !1
                })
            },
            setServedQuestionSignature: (t, r) => e(e => {
                let s = i(e.integrityError),
                    o = e.questionSetHash && t && e.questionSetHash !== t ? `${a} extracted questions do not match expected set (${e.questionSetHash} vs ${t}).` : null;
                return {
                    servedQuestionSetHash: t,
                    servedQuestionSnippets: r,
                    integrityError: n({
                        paper: s.paper,
                        question: o,
                        other: s.other
                    })
                }
            }),
            setIntegrityError: t => e({
                integrityError: t
            }),
            dismissResult: () => e({
                resultDismissed: !0
            }),
            setLocalAnswer: (t, r) => e(e => ({
                answers: { ...e.answers,
                    [t]: r
                }
            })),
            setSubmitted: t => e(e => t && e.matchId !== t ? e : {
                submitted: !0,
                submitPending: !1
            }),
            setSubmitPending: (t, r) => e(e => r && e.matchId !== r || e.submitted && t ? e : {
                submitPending: t
            }),
            reset: () => {
                e(e => ({ ...o,
                    selfId: e.selfId,
                    queuePreferences: e.queuePreferences,
                    socketSubmitAnswer: e.socketSubmitAnswer,
                    socketResign: e.socketResign,
                    socketSubmitMatch: e.socketSubmitMatch,
                    socketJoinQueue: e.socketJoinQueue,
                    socketLeaveQueue: e.socketLeaveQueue,
                    socketIsConnected: e.socketIsConnected,
                    socketOnlineCount: e.socketOnlineCount
                }))
            }
        }));
    e.s(["useRankedStore", 0, l])
}, 748387, 774782, 715e3, 393783, e => {
    "use strict";
    e.s(["getValidAnswerEntries", 0, function(e) {
        return Object.entries(e).filter(([e]) => (function(e) {
            if (!/^\d+$/.test(e)) return !1;
            let t = parseInt(e, 10);
            return t >= 1 && t <= 50
        })(e))
    }], 748387);
    let t = (e, t) => {
            let r, a = new Date,
                s = a.getFullYear(),
                i = a.getMonth() + 1;
            switch (t) {
                case "m":
                    r = 5;
                    break;
                case "s":
                    r = 8;
                    break;
                case "w":
                    r = 1
            }
            if ("w" === t) {
                let t = e + 1;
                return !(s < t) && (s !== t || !(i < r))
            }
            return !(s < e) && (s !== e || !(i < r))
        },
        r = "https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload",
        a = "https://igcse-mcq.mooo.com/api/papers",
        s = (e, t) => {
            let r = e.split("_");
            if (3 !== r.length) return null;
            let [a, s, i] = r;
            if (!/^\d{4}$/.test(s) || !/^[swm]\d{2}$/.test(i)) return null;
            let n = s.slice(2),
                o = i[0],
                l = i[1],
                u = i[2];
            return `${a}_${o}${n}_${t}_${l}${u}.pdf`
        },
        i = e => {
            try {
                let t = e.split("-");
                if (6 === t.length && "CAIE" === t[0]) {
                    let e = t[2],
                        a = t[3] || "",
                        s = t[4] || "",
                        i = t[5] || "",
                        n = `${e}_${a}_qp_${s}${i}.pdf`;
                    return `${r}/${n}`
                }
                if (e.includes("_qp_")) {
                    let t = e.replace(/\.pdf$/i, "") + ".pdf";
                    return `${r}/${t}`
                }
                let a = s(e, "qp");
                if (a) return `${r}/${a}`
            } catch (t) {
                console.warn("Failed to build question paper url for", e, t)
            }
            return `${a}/${e}/question-paper`
        },
        n = e => {
            try {
                let t = e.split("-");
                if (6 === t.length && "CAIE" === t[0]) {
                    let e = t[2],
                        a = t[3] || "",
                        s = t[4] || "",
                        i = t[5] || "",
                        n = `${e}_${a}_qp_${s}${i}.pdf`;
                    return `${r}/${n.replace(/_qp_/i,"_ms_")}`
                }
                if (e.includes("_qp_")) {
                    let t = e.replace(/\.pdf$/i, "") + ".pdf";
                    return `${r}/${t.replace(/_qp_/i,"_ms_")}`
                }
                let a = s(e, "ms");
                if (a) return `${r}/${a}`
            } catch (t) {
                console.warn("Failed to build mark scheme url for", e, t)
            }
            return `${a}/${e}/mark-scheme`
        };
    e.s(["SESSIONS", 0, [{
        value: "m",
        label: "Feb/March"
    }, {
        value: "s",
        label: "May/June"
    }, {
        value: "w",
        label: "Oct/Nov"
    }], "buildMarkSchemeUrl", 0, n, "buildPaperAttemptFromBackend", 0, (e, t) => ({
        id: e.id,
        paperId: e.paperId,
        subjectCode: e.subjectCode,
        subjectName: t,
        year: e.year,
        session: e.session,
        paperNumber: e.paperNumber,
        variant: e.variant,
        score: e.score,
        totalQuestions: e.totalQuestions,
        percentage: e.score / e.totalQuestions * 100,
        timeSpentSeconds: e.timeSpentSeconds || 0,
        completedAt: e.completedAt,
        questionPaperUrl: i(e.paperId),
        markSchemeUrl: n(e.paperId),
        answers: e.answers || {},
        source: "practice"
    }), "buildQuestionPaperUrl", 0, i, "getAvailableYears", 0, () => {
        let e = new Date().getFullYear(),
            r = [];
        for (let a = 0; a < 10; a++) {
            let s = e - a;
            (t(s, "m") || t(s, "s") || t(s, "w")) && r.push(s)
        }
        return r
    }, "getPaperVariants", 0, (e, t) => {
        if (!e || !e.papers.length) return [{
            value: "11",
            label: "Paper 11",
            hasAudio: !1,
            paperType: "single"
        }];
        let r = [],
            a = "m" === t ? ["2"] : ["1", "2", "3"];
        return e.papers.forEach(e => {
            a.forEach(t => {
                let a = `${e.paperNumber}${t}`,
                    s = `Paper ${a}`;
                "core" === e.paperType ? s += " (Core)" : "extended" === e.paperType ? s += " (Extended)" : "listening" === e.paperType ? s += " (Listening)" : "as" === e.paperType ? s += " (AS)" : "a2" === e.paperType && (s += " (A2)"), r.push({
                    value: a,
                    label: s,
                    hasAudio: e.hasAudio,
                    paperType: e.paperType
                })
            })
        }), r
    }, "isPaperReleased", 0, t], 774782);
    let o = "__OOS_SKIP__";
    e.s(["OUT_OF_SYLLABUS_SENTINEL", 0, o], 715e3);
    let l = ["discounted", "question discounted", "free mark"],
        u = ["x", "n/a"];

    function c(e, t) {
        let r = e.toLowerCase().trim();
        if (l.some(e => r.includes(e)) || u.includes(r)) return !0;
        if (!t || "" === t.trim()) return !1;
        if (t === o) return !0;
        if (e.includes(" / ")) {
            let r = e.split(" / ").map(e => e.trim()).sort(),
                a = t.includes(" / ") ? t.split(" / ").map(e => e.trim()).sort() : [t.trim()];
            return r.length === a.length && r.every(e => a.includes(e))
        }
        return e.toUpperCase() === t.toUpperCase()
    }
    e.s(["buildWrongSet", 0, function(e, t) {
        let r = new Set;
        for (let [a, s] of Object.entries(e)) c(s, t[a] ? .selectedOption) || r.add(a);
        return r
    }, "isAnswerCorrect", 0, c], 393783)
}, 649718, e => {
    "use strict";
    e.s(["createTimerService", 0, function() {
        let e = null,
            t = "idle",
            r = 0,
            a = 0,
            s = 1,
            i = {},
            n = () => {
                e && (clearInterval(e), e = null)
            },
            o = () => {
                "running" === t && (r = Math.max(r - 1, 0), i.onTick ? .(r), r <= 0 && (n(), t = "finished", i.onComplete ? .()))
            },
            l = () => {
                n(), "running" !== t || (e = setInterval(o, Math.max(50, Math.round(1e3 / s))))
            };
        return {
            start(e, s) {
                n(), i = s ? ? {}, r = a = Math.max(e, 0), "running" == (t = a > 0 ? "running" : "finished") ? l() : i.onComplete ? .()
            },
            pause() {
                "running" === t && (n(), t = "paused")
            },
            resume() {
                "paused" !== t || r <= 0 || (t = "running", l())
            },
            reset() {
                n(), t = "idle", r = a
            },
            setSpeed(e) {
                s = e > 0 ? e : 1, "running" === t && l()
            },
            getState: () => ({
                status: t,
                remaining: r,
                total: a,
                speed: s
            })
        }
    }])
}, 25897, e => {
    "use strict";
    var t = e.i(768834);
    let r = (0, e.i(649718).createTimerService)(),
        a = (0, t.create)((e, t) => ({
            timerStatus: "idle",
            timeRemaining: 0,
            totalTime: 0,
            timerSpeedMultiplier: 1,
            startTimer: a => {
                if ("running" === t().timerStatus) return;
                let {
                    timeRemaining: s,
                    totalTime: i
                } = t(), n = Math.max(a, 0), o = i > 0 && s > 0 && s < i && n === i ? s : n;
                e({
                    totalTime: n,
                    timeRemaining: o,
                    timerStatus: "running"
                }), r.setSpeed(t().timerSpeedMultiplier), r.start(o, {
                    onTick: a => {
                        "running" !== t().timerStatus ? r.pause() : e({
                            timeRemaining: a
                        })
                    },
                    onComplete: () => e({
                        timeRemaining: 0,
                        timerStatus: "finished"
                    })
                })
            },
            pauseTimer: () => {
                r.pause(), e({
                    timerStatus: "paused"
                })
            },
            resumeTimer: () => {
                "finished" !== t().timerStatus && (r.resume(), e({
                    timerStatus: "running"
                }))
            },
            resetTimer: () => {
                r.reset(), e(e => ({
                    timerStatus: "idle",
                    timeRemaining: e.totalTime,
                    timerSpeedMultiplier: 1
                }))
            },
            setTimerSpeedMultiplier: t => {
                let a = t > 0 ? t : 1;
                e({
                    timerSpeedMultiplier: a
                }), r.setSpeed(a)
            }
        }));
    e.s(["useTimerStore", 0, a])
}, 887536, e => {
    "use strict";
    var t = e.i(768834),
        r = e.i(748387),
        a = e.i(251688),
        s = e.i(774782),
        i = e.i(393783),
        n = e.i(609478),
        o = e.i(25897);
    let l = "igcse-mcq-practice-session",
        u = (0, t.create)((e, t) => ({
            currentPaper: null,
            answerKey: null,
            isMarked: !1,
            isOfflineMode: !1,
            userAnswers: {},
            currentQuestionNumber: "1",
            timeNotifications: new Set,
            isReviewMode: !1,
            lastSubmittedTime: null,
            loadedAttemptTime: null,
            setPaper: t => {
                let r = n.useBoardStore.getState().getPaperConfig(t.subjectCode, t.paperNumber),
                    a = 60 * (r ? .timeLimitMinutes ? ? 45);
                e({
                    currentPaper: t,
                    userAnswers: {},
                    answerKey: null,
                    isMarked: !1,
                    isOfflineMode: !1,
                    currentQuestionNumber: "1",
                    timeNotifications: new Set,
                    isReviewMode: !1,
                    lastSubmittedTime: null,
                    loadedAttemptTime: null
                }), o.useTimerStore.setState({
                    totalTime: a,
                    timeRemaining: a,
                    timerStatus: "idle"
                })
            },
            setAnswerKey: t => e({
                answerKey: t
            }),
            loadPastAttempt: async t => {
                let r = t;
                if (r.id && (!r.answers || 0 === Object.keys(r.answers).length)) try {
                    let e = await a.userApi.getAttempt(r.id);
                    e.answers && (r = { ...r,
                        answers: e.answers
                    })
                } catch (e) {
                    console.error("Failed to fetch full attempt details:", e)
                }
                let i = {};
                Object.entries(r.answers || {}).forEach(([e, t]) => {
                    i[e] = {
                        questionNumber: e,
                        selectedOption: t,
                        markedForReview: !1
                    }
                });
                let n = null;
                try {
                    n = await a.paperApi.getAnswerKey(r.paperId)
                } catch (e) {
                    console.error("Failed to fetch answer key for past attempt review:", e)
                }
                let l = null;
                try {
                    l = await a.paperApi.resolve({
                        subjectCode: r.subjectCode,
                        year: r.year,
                        session: r.session,
                        paperNumber: r.paperNumber,
                        variant: r.variant
                    })
                } catch (e) {
                    console.warn("Failed to resolve full paper info for attempt:", e)
                }
                let u = {
                    paperId: r.paperId,
                    subjectCode: r.subjectCode,
                    year: r.year,
                    session: r.session,
                    paperNumber: r.paperNumber,
                    variant: r.variant,
                    ...l,
                    questionPaper: l ? .questionPaper || {
                        filename: r.paperId,
                        url: a.paperApi.getQuestionPaperUrl(r.paperId)
                    },
                    markScheme: l ? .markScheme || {
                        filename: r.paperId + "_ms",
                        url: (0, s.buildMarkSchemeUrl)(r.paperId)
                    }
                };
                e({
                    userAnswers: i,
                    isMarked: !0,
                    currentQuestionNumber: "1",
                    isReviewMode: !0,
                    lastSubmittedTime: null,
                    loadedAttemptTime: r.timeSpentSeconds,
                    currentPaper: u,
                    answerKey: n || {
                        paperId: r.paperId,
                        answers: r.answers || {},
                        meta: {
                            totalQuestions: r.totalQuestions,
                            totalMarks: r.totalQuestions,
                            parsedFromFilename: "",
                            parserVersion: "",
                            warnings: []
                        },
                        source: "cache"
                    }
                }), o.useTimerStore.setState({
                    timeRemaining: 0,
                    timerStatus: "finished"
                })
            },
            setAnswer: (r, a, s) => {
                e(e => ({
                    userAnswers: { ...e.userAnswers,
                        [r]: {
                            questionNumber: r,
                            selectedOption: a,
                            selectedOptions: s,
                            markedForReview: e.userAnswers[r] ? .markedForReview ? ? !1
                        }
                    }
                })), t().savePracticeSession()
            },
            clearAnswer: t => {
                e(e => {
                    let r = { ...e.userAnswers
                    };
                    return delete r[t], {
                        userAnswers: r
                    }
                })
            },
            toggleMarkForReview: r => {
                e(e => ({
                    userAnswers: { ...e.userAnswers,
                        [r]: { ...e.userAnswers[r] || {
                                questionNumber: r,
                                selectedOption: ""
                            },
                            markedForReview: !e.userAnswers[r] ? .markedForReview
                        }
                    }
                })), t().savePracticeSession()
            },
            markPaper: r => {
                e({
                    isMarked: !0,
                    lastSubmittedTime: r ? ? null
                }), o.useTimerStore.setState({
                    timerStatus: "finished",
                    timeRemaining: 0
                }), t().clearPracticeSession()
            },
            resetAnswers: () => {
                let t = o.useTimerStore.getState().totalTime;
                e({
                    userAnswers: {},
                    answerKey: null,
                    isMarked: !1,
                    isOfflineMode: !1,
                    currentQuestionNumber: "1",
                    timeNotifications: new Set,
                    isReviewMode: !1,
                    lastSubmittedTime: null
                }), o.useTimerStore.setState({
                    timerStatus: "idle",
                    timeRemaining: t
                })
            },
            clearPaper: () => {
                e({
                    currentPaper: null,
                    answerKey: null,
                    userAnswers: {},
                    isMarked: !1,
                    isOfflineMode: !1,
                    currentQuestionNumber: "1",
                    timeNotifications: new Set,
                    isReviewMode: !1,
                    lastSubmittedTime: null
                }), o.useTimerStore.setState({
                    timerStatus: "idle",
                    timeRemaining: 0,
                    totalTime: 0
                })
            },
            setCurrentQuestion: t => e({
                currentQuestionNumber: t
            }),
            savePracticeSession: () => {
                try {
                    let e = t(),
                        r = o.useTimerStore.getState();
                    if (!e.currentPaper || e.isMarked || e.isReviewMode) return;
                    let a = {
                        version: 1,
                        paperId: e.currentPaper.paperId,
                        subjectCode: e.currentPaper.subjectCode,
                        year: e.currentPaper.year,
                        session: e.currentPaper.session,
                        paperNumber: e.currentPaper.paperNumber,
                        variant: e.currentPaper.variant,
                        userAnswers: Object.fromEntries(Object.entries(e.userAnswers).map(([e, t]) => [e, {
                            questionNumber: t.questionNumber,
                            selectedOption: t.selectedOption,
                            selectedOptions: t.selectedOptions,
                            markedForReview: t.markedForReview
                        }])),
                        timeRemaining: r.timeRemaining,
                        totalTime: r.totalTime,
                        totalQuestions: e.answerKey ? .meta.totalQuestions,
                        savedAt: Date.now()
                    };
                    localStorage.setItem(l, JSON.stringify(a))
                } catch {}
            },
            getSavedPracticeSession: () => {
                try {
                    let e = localStorage.getItem(l);
                    if (!e) return null;
                    let t = JSON.parse(e);
                    if (!t.version || 1 !== t.version) return localStorage.removeItem(l), null;
                    return t
                } catch {
                    return null
                }
            },
            clearPracticeSession: () => {
                try {
                    localStorage.removeItem(l)
                } catch {}
            },
            loadSavedPracticeSession: async () => {
                try {
                    let r = t().getSavedPracticeSession();
                    if (!r) return !1;
                    let s = await a.paperApi.resolve({
                        subjectCode: r.subjectCode,
                        year: r.year,
                        session: r.session,
                        paperNumber: r.paperNumber,
                        variant: r.variant
                    });
                    t().setPaper({ ...s,
                        subjectCode: r.subjectCode,
                        year: r.year,
                        session: r.session,
                        paperNumber: r.paperNumber,
                        variant: r.variant
                    });
                    let i = {};
                    return Object.entries(r.userAnswers).forEach(([e, t]) => {
                        i[e] = {
                            questionNumber: t.questionNumber,
                            selectedOption: t.selectedOption,
                            selectedOptions: t.selectedOptions,
                            markedForReview: t.markedForReview
                        }
                    }), e({
                        userAnswers: i
                    }), o.useTimerStore.setState({
                        timeRemaining: r.timeRemaining,
                        totalTime: r.totalTime,
                        timerStatus: "idle"
                    }), !0
                } catch (e) {
                    return console.warn("Failed to load saved practice session:", e), t().clearPracticeSession(), !1
                }
            },
            getQuestionStatus: e => {
                let r, a = t(),
                    s = a.userAnswers[e],
                    n = !!s ? .selectedOption,
                    o = s ? .markedForReview || !1;
                if (a.isMarked && a.answerKey && n) {
                    let t = a.answerKey.answers[e];
                    r = !!t && (0, i.isAnswerCorrect)(t, s.selectedOption)
                }
                return {
                    answered: n,
                    markedForReview: o,
                    isCorrect: r
                }
            },
            getScore: () => {
                let e = t();
                if (!e.answerKey || !e.isMarked) return {
                    correct: 0,
                    total: 0,
                    percentage: 0
                };
                let a = 0,
                    s = e.answerKey.meta.totalMarks ? ? e.answerKey.meta.totalQuestions;
                return (0, r.getValidAnswerEntries)(e.answerKey.answers).forEach(([t, r]) => {
                    let s = e.userAnswers[t];
                    if (s) {
                        if ((0, i.isAnswerCorrect)(r, s.selectedOption)) a++;
                        else if (r.includes(" / ")) {
                            let e = r.split(" / ").map(e => e.trim()).sort(),
                                t = (s.selectedOption.includes(" / ") ? s.selectedOption.split(" / ").map(e => e.trim()).sort() : [s.selectedOption.trim()]).filter(t => e.includes(t)).length;
                            a += t
                        }
                    }
                }), {
                    correct: a,
                    total: s,
                    percentage: Math.round(a / s * 100)
                }
            },
            getTimerDuration: () => {
                let e = t().currentPaper;
                if (!e) return 2700;
                let r = n.useBoardStore.getState().getPaperConfig(e.subjectCode, e.paperNumber);
                return 60 * (r ? .timeLimitMinutes ? ? 45)
            }
        }));
    e.s(["useSessionStore", 0, u])
}, 639884, e => {
    "use strict";
    var t = e.i(768834),
        r = e.i(251688),
        a = e.i(649718);
    let s = "igcse-mcq-topical-session",
        i = "igcse-mcq-topical-selector",
        n = (0, a.createTimerService)(),
        o = (0, t.create)()((e, t) => ({
            topicalsSubjects: [],
            topicalsSubjectsLoading: !1,
            currentSubjectInfo: null,
            subjectInfoLoading: !1,
            session: null,
            questionsLoading: !1,
            timerStatus: "idle",
            timeRemaining: 0,
            totalTime: 0,
            fetchTopicalsSubjects: async () => {
                e({
                    topicalsSubjectsLoading: !0
                });
                try {
                    let t = await r.topicalsApi.getSubjects();
                    e({
                        topicalsSubjects: t,
                        topicalsSubjectsLoading: !1
                    })
                } catch (t) {
                    console.error("Failed to fetch topicals subjects:", t), e({
                        topicalsSubjectsLoading: !1
                    })
                }
            },
            fetchSubjectInfo: async (t, a) => {
                e({
                    subjectInfoLoading: !0
                });
                try {
                    let s = await r.topicalsApi.getSubjectInfo(t, a);
                    e({
                        currentSubjectInfo: s,
                        subjectInfoLoading: !1
                    })
                } catch (t) {
                    console.error("Failed to fetch topicals subject info:", t), e({
                        subjectInfoLoading: !1
                    })
                }
            },
            startTopicalSession: async t => {
                n.reset(), e({
                    questionsLoading: !0
                });
                try {
                    let a = Math.min(t.limit && t.limit > 0 ? t.limit : 500, 500),
                        i = Math.max(0, t.offset ? ? 0),
                        n = await r.topicalsApi.getQuestions(t.subjectCode, t.topicIds, {
                            years: t.years,
                            sessions: t.sessions,
                            variants: t.variants
                        }, a, i);
                    if (0 === n.questions.length) throw e({
                        questionsLoading: !1
                    }), Error("No questions found matching your filters");
                    let o = Math.round(67.5 * n.questions.length),
                        l = {
                            subjectCode: t.subjectCode,
                            subjectName: t.subjectName,
                            topicIds: t.topicIds,
                            topicNames: t.topicNames,
                            questions: n.questions,
                            currentIndex: 0,
                            userAnswers: {},
                            isMarked: !1,
                            startedAt: Date.now(),
                            filters: {
                                years: t.years,
                                sessions: t.sessions,
                                variants: t.variants,
                                offset: t.offset,
                                limit: t.limit
                            }
                        };
                    e({
                        session: l,
                        questionsLoading: !1,
                        timerStatus: "idle",
                        timeRemaining: o,
                        totalTime: o
                    });
                    try {
                        localStorage.setItem(s, JSON.stringify(l))
                    } catch {}
                } catch (t) {
                    throw e({
                        questionsLoading: !1
                    }), t
                }
            },
            setTopicalAnswer: (t, r) => {
                e(e => {
                    if (!e.session) return e;
                    let a = { ...e.session,
                        userAnswers: { ...e.session.userAnswers,
                            [t]: r
                        }
                    };
                    try {
                        localStorage.setItem(s, JSON.stringify(a))
                    } catch {}
                    return {
                        session: a
                    }
                })
            },
            clearTopicalAnswer: t => {
                e(e => {
                    if (!e.session) return e;
                    let r = { ...e.session.userAnswers
                    };
                    delete r[t];
                    let a = { ...e.session,
                        userAnswers: r
                    };
                    try {
                        localStorage.setItem(s, JSON.stringify(a))
                    } catch {}
                    return {
                        session: a
                    }
                })
            },
            goToQuestion: t => {
                e(e => e.session ? {
                    session: { ...e.session,
                        currentIndex: t
                    }
                } : e)
            },
            markTopicalSession: () => {
                n.reset();
                let {
                    session: r
                } = t();
                if (r) {
                    e({
                        session: { ...r,
                            isMarked: !0
                        },
                        timerStatus: "finished"
                    });
                    try {
                        localStorage.removeItem(s), localStorage.removeItem(i)
                    } catch {}
                }
            },
            resetTopicalSession: () => {
                n.reset();
                let {
                    totalTime: r
                } = t();
                e(e => e.session ? {
                    session: { ...e.session,
                        userAnswers: {},
                        isMarked: !1,
                        currentIndex: 0,
                        startedAt: Date.now()
                    },
                    timerStatus: "idle",
                    timeRemaining: r
                } : e)
            },
            endTopicalSession: () => {
                n.reset(), e({
                    session: null,
                    timerStatus: "idle",
                    timeRemaining: 0,
                    totalTime: 0
                });
                try {
                    localStorage.removeItem(s), localStorage.removeItem(i)
                } catch {}
            },
            restoreTopicalSession: () => {
                try {
                    let t = localStorage.getItem(s);
                    if (!t) return !1;
                    let r = JSON.parse(t);
                    if (!r ? .questions ? .length) return !1;
                    let a = Math.round(67.5 * r.questions.length);
                    return e({
                        session: r,
                        timerStatus: "idle",
                        timeRemaining: a,
                        totalTime: a
                    }), !0
                } catch {
                    return !1
                }
            },
            getSavedTopicalSelectorState: () => {
                try {
                    let e = localStorage.getItem(i);
                    if (!e) return null;
                    let t = JSON.parse(e);
                    if (!t.version || 2 !== t.version) return localStorage.removeItem(i), null;
                    return t
                } catch {
                    return null
                }
            },
            saveTopicalSelectorState: e => {
                try {
                    let t = { ...e,
                        savedAt: Date.now(),
                        version: 2
                    };
                    localStorage.setItem(i, JSON.stringify(t))
                } catch {}
            },
            clearSavedTopicalSelectorState: () => {
                try {
                    localStorage.removeItem(i)
                } catch {}
            },
            getTopicalScore: () => {
                let {
                    session: e
                } = t();
                if (!e) return {
                    correct: 0,
                    total: 0,
                    percentage: 0
                };
                let r = e.questions.length,
                    a = 0;
                for (let t of e.questions) {
                    let r = e.userAnswers[t.question_id];
                    r && r === t.answer && a++
                }
                return {
                    correct: a,
                    total: r,
                    percentage: r > 0 ? Math.round(a / r * 100) : 0
                }
            },
            startTimer: () => {
                t().timeRemaining && (e({
                    timerStatus: "running"
                }), n.start(t().timeRemaining, {
                    onTick: r => {
                        "running" !== t().timerStatus ? n.pause() : e({
                            timeRemaining: r
                        })
                    },
                    onComplete: () => e({
                        timeRemaining: 0,
                        timerStatus: "finished"
                    })
                }))
            },
            pauseTimer: () => {
                n.pause(), e({
                    timerStatus: "paused"
                })
            },
            resumeTimer: () => {
                "finished" !== t().timerStatus && (n.resume(), e({
                    timerStatus: "running"
                }))
            },
            resetTimer: () => {
                n.reset(), e(e => ({
                    timerStatus: "idle",
                    timeRemaining: e.totalTime
                }))
            }
        }));
    e.s(["MAX_TOPICAL_QUESTIONS", 0, 500, "useTopicalsStore", 0, o])
}, 618566, (e, t, r) => {
    t.exports = e.r(976562)
}, 422569, e => {
    "use strict";
    var t = e.i(768834),
        r = e.i(609478),
        a = e.i(251688),
        s = e.i(959141),
        i = e.i(705766);
    let n = "igcse-mcq-statistics",
        o = () => s.hasConfig && s.auth ? s.auth.currentUser : null,
        l = e => {
            try {
                o() || localStorage.setItem(n, JSON.stringify(e))
            } catch {}
        },
        u = (0, t.create)()((e, t) => ({
            attempts: [],
            recordAttempt: t => {
                let r = { ...t,
                    completedAt: new Date().toISOString(),
                    source: "practice"
                };
                e(e => {
                    let t = [...e.attempts, r];
                    return o() || l(t), {
                        attempts: t
                    }
                })
            },
            clearAllStats: async () => {
                if (o()) try {
                    await a.userApi.deleteAttempts(), i.default.success("All statistics cleared from your account")
                } catch (e) {
                    throw console.error("Failed to clear backend statistics:", e), i.default.error("Failed to clear statistics from server"), e
                }
                e({
                    attempts: []
                }), l([])
            },
            clearSubjectStats: async t => {
                if (o()) try {
                    await a.userApi.deleteAttempts(t);
                    let e = r.useBoardStore.getState().subjects || [],
                        s = e.find(e => e.code === t) ? .name || t;
                    i.default.success(`${s} statistics cleared from your account`)
                } catch (e) {
                    throw console.error("Failed to clear backend statistics:", e), i.default.error("Failed to clear statistics from server"), e
                }
                e(e => {
                    let r = e.attempts.filter(e => e.subjectCode !== t);
                    return l(r), {
                        attempts: r
                    }
                })
            },
            getSubjectStats: e => {
                let {
                    attempts: a
                } = t(), s = a.filter(t => t.subjectCode === e);
                if (0 === s.length) return null;
                let i = s.reduce((e, t) => e + t.percentage, 0),
                    n = s.reduce((e, t) => e + t.timeSpentSeconds, 0);
                return {
                    subjectCode: e,
                    subjectName: r.useBoardStore.getState().subjects.find(t => t.code === e) ? .name || e,
                    attempts: s.sort((e, t) => new Date(e.completedAt).getTime() - new Date(t.completedAt).getTime()),
                    averageScore: i / s.length,
                    averageTimeSeconds: n / s.length,
                    totalAttempts: s.length
                }
            },
            getAllSubjectStats: () => {
                let {
                    attempts: e,
                    getSubjectStats: r
                } = t();
                return [...new Set(e.map(e => e.subjectCode))].map(e => r(e)).filter(e => null !== e)
            },
            getAvailableSubjects: () => {
                let {
                    attempts: e
                } = t();
                return [...new Set(e.map(e => e.subjectCode))].map(e => ({
                    code: e,
                    name: r.useBoardStore.getState().subjects.find(t => t.code === e) ? .name || e
                }))
            },
            loadGuestAttempts: () => {
                o() || e({
                    attempts: (() => {
                        try {
                            let e = localStorage.getItem(n);
                            if (!e) return [];
                            return JSON.parse(e)
                        } catch {
                            return []
                        }
                    })()
                })
            }
        }));
    e.s(["useStatisticsStore", 0, u])
}, 338280, e => {
    "use strict";
    let t = [{
        id: "fox",
        label: "Fox",
        emoji: "🦊",
        bg: "bg-orange-100 dark:bg-orange-900/30"
    }, {
        id: "cat",
        label: "Cat",
        emoji: "🐱",
        bg: "bg-yellow-100 dark:bg-yellow-900/30"
    }, {
        id: "bear",
        label: "Bear",
        emoji: "🐻",
        bg: "bg-amber-100 dark:bg-amber-900/30"
    }, {
        id: "panda",
        label: "Panda",
        emoji: "🐼",
        bg: "bg-gray-100 dark:bg-gray-800/50"
    }, {
        id: "owl",
        label: "Owl",
        emoji: "🦉",
        bg: "bg-amber-100 dark:bg-amber-900/30"
    }, {
        id: "penguin",
        label: "Penguin",
        emoji: "🐧",
        bg: "bg-sky-100 dark:bg-sky-900/30"
    }, {
        id: "rabbit",
        label: "Rabbit",
        emoji: "🐰",
        bg: "bg-pink-100 dark:bg-pink-900/30"
    }, {
        id: "koala",
        label: "Koala",
        emoji: "🐨",
        bg: "bg-slate-100 dark:bg-slate-800/50"
    }, {
        id: "dog",
        label: "Dog",
        emoji: "🐶",
        bg: "bg-yellow-100 dark:bg-yellow-900/30"
    }, {
        id: "lion",
        label: "Lion",
        emoji: "🦁",
        bg: "bg-orange-100 dark:bg-orange-900/30"
    }, {
        id: "tiger",
        label: "Tiger",
        emoji: "🐯",
        bg: "bg-amber-100 dark:bg-amber-900/30"
    }, {
        id: "frog",
        label: "Frog",
        emoji: "🐸",
        bg: "bg-green-100 dark:bg-green-900/30"
    }];
    t.map(e => e.emoji), e.s(["AVATAR_BG_COLORS", 0, {
        fox: "#fff3e0",
        cat: "#fffde7",
        bear: "#fff8e1",
        panda: "#f5f5f5",
        owl: "#fff8e1",
        penguin: "#e1f5fe",
        rabbit: "#fce4ec",
        koala: "#eceff1",
        dog: "#fffde7",
        lion: "#fff3e0",
        tiger: "#fff8e1",
        frog: "#e8f5e9"
    }, "AVATAR_PRESETS", 0, t, "emojiToDataUri", 0, function(e, t = "#e8f5e9") {
        let r = /^#[0-9A-Fa-f]{6}$/.test(t) ? t : "#e8f5e9",
            a = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="${r}"/><text x="50" y="55" font-size="50" text-anchor="middle" dominant-baseline="central">${e}</text></svg>`;
        return `data:image/svg+xml,${encodeURIComponent(a)}`
    }])
}, 755838, (e, t, r) => {
    "use strict";
    var a = e.r(271645),
        s = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = a.useState,
        n = a.useEffect,
        o = a.useLayoutEffect,
        l = a.useDebugValue;

    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !s(e, r)
        } catch (e) {
            return !0
        }
    }
    var c = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            a = i({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            s = a[0].inst,
            c = a[1];
        return o(function() {
            s.value = r, s.getSnapshot = t, u(s) && c({
                inst: s
            })
        }, [e, r, t]), n(function() {
            return u(s) && c({
                inst: s
            }), e(function() {
                u(s) && c({
                    inst: s
                })
            })
        }, [e]), l(r), r
    };
    r.useSyncExternalStore = void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : c
}, 802239, (e, t, r) => {
    "use strict";
    t.exports = e.r(755838)
}, 799676, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        a = e.i(30207),
        s = e.i(934620);
    e.i(174080);
    var i = e.i(991918),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
            let s = (0, i.createSlot)(`Primitive.${a}`),
                n = r.forwardRef((e, r) => {
                    let {
                        asChild: i,
                        ...n
                    } = e;
                    return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(i ? s : a, { ...n,
                        ref: r
                    })
                });
            return n.displayName = `Primitive.${a}`, { ...e,
                [a]: n
            }
        }, {}),
        o = e.i(802239);

    function l() {
        return () => {}
    }
    var u = "Avatar",
        [c, d] = function(e, a = []) {
            let s = [],
                i = () => {
                    let t = s.map(e => r.createContext(e));
                    return function(a) {
                        let s = a ? .[e] || t;
                        return r.useMemo(() => ({
                            [`__scope${e}`]: { ...a,
                                [e]: s
                            }
                        }), [a, s])
                    }
                };
            return i.scopeName = e, [function(a, i) {
                let n = r.createContext(i);
                n.displayName = a + "Context";
                let o = s.length;
                s = [...s, i];
                let l = a => {
                    let {
                        scope: s,
                        children: i,
                        ...l
                    } = a, u = s ? .[e] ? .[o] || n, c = r.useMemo(() => l, Object.values(l));
                    return (0, t.jsx)(u.Provider, {
                        value: c,
                        children: i
                    })
                };
                return l.displayName = a + "Provider", [l, function(t, s) {
                    let l = s ? .[e] ? .[o] || n,
                        u = r.useContext(l);
                    if (u) return u;
                    if (void 0 !== i) return i;
                    throw Error(`\`${t}\` must be used within \`${a}\``)
                }]
            }, function(...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let a = () => {
                    let a = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let s = a.reduce((t, {
                            useScope: r,
                            scopeName: a
                        }) => {
                            let s = r(e)[`__scope${a}`];
                            return { ...t,
                                ...s
                            }
                        }, {});
                        return r.useMemo(() => ({
                            [`__scope${t.scopeName}`]: s
                        }), [s])
                    }
                };
                return a.scopeName = t.scopeName, a
            }(i, ...a)]
        }(u),
        [p, m] = c(u),
        h = r.forwardRef((e, a) => {
            let {
                __scopeAvatar: s,
                ...i
            } = e, [o, l] = r.useState("idle");
            return (0, t.jsx)(p, {
                scope: s,
                imageLoadingStatus: o,
                onImageLoadingStatusChange: l,
                children: (0, t.jsx)(n.span, { ...i,
                    ref: a
                })
            })
        });
    h.displayName = u;
    var b = "AvatarImage",
        g = r.forwardRef((e, i) => {
            let {
                __scopeAvatar: u,
                src: c,
                onLoadingStatusChange: d = () => {},
                ...p
            } = e, h = m(b, u), g = function(e, {
                referrerPolicy: t,
                crossOrigin: a
            }) {
                let i = (0, o.useSyncExternalStore)(l, () => !0, () => !1),
                    n = r.useRef(null),
                    u = i ? (n.current || (n.current = new window.Image), n.current) : null,
                    [c, d] = r.useState(() => k(u, e));
                return (0, s.useLayoutEffect)(() => {
                    d(k(u, e))
                }, [u, e]), (0, s.useLayoutEffect)(() => {
                    let e = e => () => {
                        d(e)
                    };
                    if (!u) return;
                    let r = e("loaded"),
                        s = e("error");
                    return u.addEventListener("load", r), u.addEventListener("error", s), t && (u.referrerPolicy = t), "string" == typeof a && (u.crossOrigin = a), () => {
                        u.removeEventListener("load", r), u.removeEventListener("error", s)
                    }
                }, [u, a, t]), c
            }(c, p), f = (0, a.useCallbackRef)(e => {
                d(e), h.onImageLoadingStatusChange(e)
            });
            return (0, s.useLayoutEffect)(() => {
                "idle" !== g && f(g)
            }, [g, f]), "loaded" === g ? (0, t.jsx)(n.img, { ...p,
                ref: i,
                src: c
            }) : null
        });
    g.displayName = b;
    var f = "AvatarFallback",
        x = r.forwardRef((e, a) => {
            let {
                __scopeAvatar: s,
                delayMs: i,
                ...o
            } = e, l = m(f, s), [u, c] = r.useState(void 0 === i);
            return r.useEffect(() => {
                if (void 0 !== i) {
                    let e = window.setTimeout(() => c(!0), i);
                    return () => window.clearTimeout(e)
                }
            }, [i]), u && "loaded" !== l.imageLoadingStatus ? (0, t.jsx)(n.span, { ...o,
                ref: a
            }) : null
        });

    function k(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
    }
    x.displayName = f;
    var w = e.i(975157);
    let v = r.forwardRef(({
        className: e,
        ...r
    }, a) => (0, t.jsx)(h, {
        ref: a,
        className: (0, w.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
        ...r
    }));
    v.displayName = h.displayName;
    let S = r.forwardRef(({
        className: e,
        ...r
    }, a) => (0, t.jsx)(g, {
        ref: a,
        className: (0, w.cn)("aspect-square h-full w-full", e),
        ...r
    }));
    S.displayName = g.displayName;
    let j = r.forwardRef(({
        className: e,
        ...r
    }, a) => (0, t.jsx)(x, {
        ref: a,
        className: (0, w.cn)("flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold", e),
        ...r
    }));
    j.displayName = x.displayName, e.s(["Avatar", 0, v, "AvatarFallback", 0, j, "AvatarImage", 0, S], 799676)
}, 287978, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(846932),
        a = e.i(271645);
    let s = {
            rest: {
                x: 0,
                y: 0
            },
            hover: {
                x: 4,
                y: 4
            },
            tap: {
                x: 4,
                y: 4
            }
        },
        i = {
            rest: {
                x: 0
            },
            hover: {
                x: 6
            },
            tap: {
                x: 8
            }
        },
        n = a.default.forwardRef(({
            children: e,
            arrow: a,
            className: n = "",
            fullWidth: o = !1,
            justify: l = "center",
            ...u
        }, c) => {
            let {
                disabled: d,
                onClick: p,
                ...m
            } = u, h = d ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
            return (0, t.jsx)(r.motion.button, {
                ref: c,
                ...m,
                onClick: d ? void 0 : p,
                disabled: d,
                "aria-disabled": d,
                className: `${n} ${h}`,
                variants: s,
                initial: "rest",
                whileHover: d ? void 0 : "hover",
                whileTap: d ? void 0 : "tap",
                transition: {
                    duration: .15,
                    ease: "easeOut"
                },
                children: (0, t.jsxs)("span", {
                    className: `${o?"flex w-full":"inline-flex w-full"} items-center gap-3 min-w-0 ${{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between"}[l]}`,
                    children: [e, a && (0, t.jsx)(r.motion.svg, {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 3,
                        className: "w-5 h-5 sm:w-6 sm:h-6",
                        variants: i,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 16
                        },
                        children: (0, t.jsx)("path", {
                            d: "M5 12h14M12 5l7 7-7 7"
                        })
                    })]
                })
            })
        });
    n.displayName = "AnimatedButton", e.s(["default", 0, n])
}, 570044, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(776639),
        a = e.i(287978);
    e.s(["SessionGuardModal", 0, function({
        open: e,
        onConfirm: s,
        onCancel: i,
        title: n = "Replace Active Session?",
        description: o = "You have an active session in progress. Starting a new one will end it and all your current answers will be lost.",
        confirmLabel: l = "Start Anyway"
    }) {
        return (0, t.jsx)(r.Dialog, {
            open: e,
            onOpenChange: e => !e && i(),
            children: (0, t.jsx)(r.DialogContent, {
                className: "max-w-md w-full p-8 border-4 border-boutique-ink dark:border-transparent rounded-[32px] shadow-[8px_8px_0px_0px_#1a1a1a] dark:shadow-[0px_8px_40px_rgba(0,0,0,0.6)] [&>button:last-child]:hidden z-[501]",
                children: (0, t.jsxs)("div", {
                    className: "flex items-start gap-4",
                    children: [(0, t.jsx)("div", {
                        className: "flex-shrink-0 w-12 h-12 bg-boutique-coral border-2 border-boutique-ink dark:border-transparent rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1a1a1a]",
                        children: (0, t.jsxs)("svg", {
                            className: "w-7 h-7 text-boutique-ink",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0, t.jsx)("path", {
                                d: "M12 3L2 20h20L12 3z"
                            }), (0, t.jsx)("line", {
                                x1: "12",
                                y1: "9",
                                x2: "12",
                                y2: "13"
                            }), (0, t.jsx)("circle", {
                                cx: "12",
                                cy: "16.5",
                                r: "0.9"
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, t.jsxs)(r.DialogHeader, {
                            className: "text-left space-y-0 mb-4",
                            children: [(0, t.jsx)(r.DialogTitle, {
                                className: "text-2xl font-black text-boutique-ink dark:text-boutique-cream tracking-tight",
                                children: n
                            }), (0, t.jsx)(r.DialogDescription, {
                                className: "text-sm font-medium text-boutique-ink/60 dark:text-boutique-cream/60 pt-2 block",
                                children: o
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, t.jsx)("button", {
                                onClick: i,
                                className: "flex-1 px-4 py-3 bg-white dark:bg-dark-surface border-2 border-boutique-ink dark:border-transparent text-boutique-ink dark:text-boutique-cream text-sm font-black rounded-xl hover:bg-boutique-sage/10 transition-all font-display",
                                children: "Cancel"
                            }), (0, t.jsx)(a.default, {
                                onClick: s,
                                className: "flex-1 sticker-button py-3 text-sm",
                                children: l
                            })]
                        })]
                    })]
                })
            })
        })
    }])
}, 354606, e => {
    "use strict";
    var t = e.i(843476);

    function r({
        className: e = "w-4 h-4"
    }) {
        return (0, t.jsxs)("svg", {
            className: e,
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, t.jsx)("rect", {
                x: "3.5",
                y: "3.5",
                width: "17",
                height: "17",
                rx: "5",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1.25",
                fill: "currentColor"
            })]
        })
    }
    e.s(["InstagramFollowLink", 0, function({
        label: e = "Follow @quickmark.co",
        className: a = ""
    }) {
        return (0, t.jsxs)("a", {
            href: "https://instagram.com/quickmark.co",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `inline-flex items-center justify-center gap-2 rounded-xl border-2 border-boutique-coral/25 bg-white/70 px-4 py-2.5 text-xs font-black text-boutique-ink transition-colors hover:bg-boutique-coral/12 dark:border-boutique-coral/20 dark:bg-dark-surface/70 dark:text-boutique-cream dark:hover:bg-boutique-coral/10 ${a}`,
            children: [(0, t.jsx)(r, {}), (0, t.jsx)("span", {
                children: e
            })]
        })
    }])
}, 920919, 669242, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(174080);
    let a = "donate_modal_opened";

    function s() {
        localStorage.setItem(a, "true")
    }
    e.s(["hasDonateModalBeenSeen", 0, function() {
        return "true" === localStorage.getItem(a)
    }, "markDonateModalSeen", 0, s], 669242);
    var i = e.i(354606);
    e.s(["DonateModal", 0, function({
        isOpen: e,
        onClose: a
    }) {
        if (!e) return null;
        let n = () => {
            s(), a()
        };
        return (0, r.createPortal)((0, t.jsxs)("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Support QuickMark",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 bg-boutique-ink/50 backdrop-blur-sm",
                onClick: n
            }), (0, t.jsxs)("div", {
                className: "relative w-full sm:max-w-xl max-h-[95vh] sm:max-h-[90vh] flex flex-col bg-boutique-cream dark:bg-dark-elevated border-4 border-boutique-ink dark:border-transparent rounded-[32px] shadow-[8px_8px_0px_0px_#1a1a1a] dark:shadow-[0px_8px_40px_rgba(0,0,0,0.6)] overflow-hidden",
                children: [(0, t.jsxs)("div", {
                    className: "relative bg-boutique-coral/20 dark:bg-boutique-coral/10 px-6 pt-6 pb-4 border-b-2 border-boutique-ink/5 dark:border-white/5 flex flex-col items-center text-center",
                    children: [(0, t.jsx)("button", {
                        onClick: n,
                        className: "absolute top-3 right-3 w-8 h-8 rounded-full border-2 border-boutique-ink/15 dark:border-white/15 flex items-center justify-center text-boutique-ink/50 dark:text-boutique-cream/50 hover:bg-boutique-ink/5 dark:hover:bg-white/5 hover:text-boutique-ink dark:hover:text-boutique-cream transition-colors",
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                            className: "w-3.5 h-3.5",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0, t.jsx)("path", {
                                d: "M18 6 6 18M6 6l12 12"
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "w-12 h-12 bg-boutique-coral border-4 border-boutique-ink dark:border-transparent rounded-[14px] shadow-[3px_3px_0px_0px_#1a1a1a] dark:shadow-none flex items-center justify-center mb-3",
                        children: (0, t.jsx)("svg", {
                            className: "w-6 h-6 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            stroke: "none",
                            children: (0, t.jsx)("path", {
                                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boutique-ink/5 dark:bg-white/5 border border-boutique-ink/10 dark:border-white/10 mb-2",
                        children: (0, t.jsx)("span", {
                            className: "text-[9px] font-black uppercase tracking-[0.15em] text-boutique-ink/50 dark:text-boutique-cream/50",
                            children: "A message from the QuickMark team"
                        })
                    }), (0, t.jsx)("h2", {
                        className: "text-xl sm:text-2xl font-black text-boutique-ink dark:text-boutique-cream leading-tight",
                        children: "We Need Your Help"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "px-6 py-4 space-y-3 overflow-y-auto max-h-[35vh] sm:max-h-[40vh] custom-scrollbar",
                    children: [(0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80 font-medium",
                        children: "Hey there,"
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "QuickMark was built to solve a simple problem: most revision tools for IGCSE students are clunky, outdated, or hidden behind steep paywalls. We want to make practice faster, clearer, and genuinely useful when it matters most."
                    }), (0, t.jsxs)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: ["Countless hours go into extracting papers, improving the ranking system, and making sure everything ", (0, t.jsx)("em", {
                            children: "just works"
                        }), " on your phone during those late-night study sessions."]
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "Running and improving a platform like this comes with real costs. If QuickMark has helped you, a small donation helps keep the servers running and supports new features for you and other students using the platform."
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "No pressure at all. Every contribution goes back into making QuickMark more reliable, more useful, and more accessible for the students who depend on it."
                    }), (0, t.jsx)("p", {
                        className: "text-xs font-black text-boutique-ink dark:text-boutique-cream pt-1",
                        children: "- The QuickMark Team"
                    })]
                }), (0, t.jsx)("div", {
                    className: "px-6 pb-6 pt-3 border-t-2 border-boutique-ink/5 dark:border-white/5 bg-white/30 dark:bg-white/5",
                    children: (0, t.jsxs)("div", {
                        className: "flex flex-row items-center justify-center gap-6",
                        children: [(0, t.jsx)("div", {
                            className: "p-2 bg-white rounded-xl border-2 border-boutique-ink/10 shadow-[4px_4px_0px_0px_#1a1a1a] dark:shadow-none flex-shrink-0",
                            children: (0, t.jsx)("img", {
                                src: "/upi.png",
                                alt: "UPI QR code to support QuickMark",
                                className: "w-24 h-24 object-contain"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col gap-3 flex-1 min-w-0",
                            children: [(0, t.jsxs)("p", {
                                className: "text-[10px] font-black uppercase tracking-wider text-boutique-ink/40 dark:text-boutique-cream/40 leading-tight",
                                children: ["Scan to support ", (0, t.jsx)("br", {}), " via UPI"]
                            }), (0, t.jsx)("button", {
                                onClick: n,
                                className: "w-full px-4 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wide bg-boutique-coral text-white shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-none hover:bg-boutique-coral/90 transition-all",
                                children: "Support Now"
                            }), (0, t.jsx)("button", {
                                onClick: n,
                                className: "w-full px-4 py-1 text-[10px] font-black uppercase tracking-wide text-boutique-ink/40 dark:text-boutique-cream/40 hover:text-boutique-ink dark:hover:text-boutique-cream transition-colors",
                                children: "Maybe later"
                            }), (0, t.jsx)(i.InstagramFollowLink, {
                                label: "Follow on Instagram",
                                className: "w-full justify-center"
                            })]
                        })]
                    })
                })]
            })]
        }), document.body)
    }], 920919)
}, 733435, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        a = e.i(618566),
        s = e.i(402971),
        i = e.i(824182),
        n = e.i(375679);

    function o() {
        let [e, a] = (0, r.useState)(!1), s = (0, i.usePwaStore)(e => e.installPromptEvent), o = (0, i.usePwaStore)(e => e.isStandalone), l = (0, i.usePwaStore)(e => e.installOutcome), u = (0, i.usePwaStore)(e => e.setInstallPromptEvent), c = (0, i.usePwaStore)(e => e.setInstallOutcome);
        if (e || o || "accepted" === l || !/android|iphone|ipad|ipod|mobile/i.test(window.navigator.userAgent)) return null;
        let d = /iphone|ipad|ipod/i.test(window.navigator.userAgent) && !s;
        if (!s && !d) return null;
        let p = async () => {
            if (!s) return;
            await s.prompt(), (0, n.trackEvent)("pwa_install_prompt_requested", {
                surface: "floating_banner"
            });
            let e = await s.userChoice;
            (0, n.trackEvent)("pwa_install_prompt_choice", {
                surface: "floating_banner",
                outcome: e.outcome
            }), c("accepted" === e.outcome ? "accepted_pending" : "dismissed"), u(null)
        };
        return (0, t.jsxs)("div", {
            className: "sticker-card bg-boutique-sage/25 dark:bg-boutique-sage/10",
            children: [(0, t.jsxs)("div", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                children: [(0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0, t.jsx)("p", {
                        className: "text-xs font-black uppercase tracking-[0.2em] text-boutique-ink/45 dark:text-boutique-cream/45",
                        children: "QuickMark App"
                    }), (0, t.jsx)("h2", {
                        className: "text-2xl font-black tracking-tight",
                        children: "Install for a faster mobile launch."
                    }), (0, t.jsx)("p", {
                        className: "max-w-2xl text-sm font-medium text-boutique-ink/65 dark:text-boutique-cream/65",
                        children: "Launch straight into practice, get cleaner fullscreen-style navigation, and prepare for upcoming offline study features."
                    }), d ? (0, t.jsxs)("p", {
                        className: "text-sm font-medium text-boutique-ink/65 dark:text-boutique-cream/65",
                        children: ["On iPhone or iPad, use Share then ", (0, t.jsx)("span", {
                            className: "font-black",
                            children: "Add to Home Screen"
                        }), "."]
                    }) : null]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-wrap gap-3",
                    children: [s ? (0, t.jsx)("button", {
                        onClick: () => void p(),
                        className: "sticker-button px-6 py-3 text-sm font-black uppercase tracking-[0.14em]",
                        children: "Install App"
                    }) : null, "accepted_pending" === l ? (0, t.jsx)("div", {
                        className: "rounded-full border-2 border-boutique-sage/30 bg-white/70 px-5 py-3 text-sm font-black text-boutique-ink dark:border-boutique-sage/20 dark:bg-dark-surface/70 dark:text-boutique-cream",
                        children: "Finishing install..."
                    }) : null, (0, t.jsx)("button", {
                        onClick: () => a(!0),
                        className: "rounded-full border-2 border-boutique-ink/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-boutique-ink/65 transition-colors hover:bg-white/70 dark:border-white/10 dark:text-boutique-cream/65 dark:hover:bg-white/8",
                        children: "Not now"
                    })]
                })]
            }), "accepted_pending" === l ? (0, t.jsxs)("p", {
                className: "mt-3 text-xs font-bold text-boutique-ink/50 dark:text-boutique-cream/50",
                children: ['If Android stays on "installing", open Chrome\'s menu and tap ', (0, t.jsx)("span", {
                    className: "font-black",
                    children: "Install app"
                }), " again."]
            }) : null]
        })
    }
    var l = e.i(785305);

    function u() {
        let e = (0, a.usePathname)(),
            s = (0, a.useSearchParams)(),
            n = (0, i.usePwaStore)(e => e.isOnline),
            o = (0, l.useSyncStore)(e => e.queueCount),
            [u, c] = (0, r.useState)(!1),
            d = !!localStorage.getItem("igcse-mcq-practice-session");
        if (n || u) return null;
        let p = s.get("tab"),
            m = "practice" === p || "topicals" === p || "ranked" === p ? p : e.startsWith("/app/ranked") ? "ranked" : e.startsWith("/app/practice") ? "practice" : e.startsWith("/app/topicals") ? "topicals" : null,
            h = "practice" === m;
        return (0, t.jsx)("div", {
            className: "border-b-2 border-boutique-coral/20 bg-boutique-coral/10 px-4 py-3 text-sm font-medium text-boutique-ink dark:border-boutique-coral/15 dark:bg-boutique-coral/12 dark:text-boutique-cream",
            children: (0, t.jsxs)("div", {
                className: "mx-auto flex max-w-6xl items-start justify-between gap-3",
                children: [(0, t.jsxs)("div", {
                    className: "flex-1",
                    children: [(0, t.jsx)("p", {
                        children: "ranked" === m ? "You are offline. Ranked requires a live connection for matchmaking." : h ? "Offline mode active. Downloaded papers work normally. Leaderboards and cloud statistics require internet." : "You are offline. Some features require a connection."
                    }), h && !d && (0, t.jsx)("p", {
                        className: "mt-1 text-xs font-bold opacity-70",
                        children: "For best offline use, download papers while connected before going offline."
                    }), o > 0 && (0, t.jsxs)("p", {
                        className: "mt-1 text-xs font-bold opacity-70",
                        children: [o, " ", 1 === o ? "attempt" : "attempts", " pending sync"]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, t.jsx)("span", {
                        className: "rounded-full bg-white/70 px-2 py-1 text-[11px] font-black uppercase tracking-[0.14em] dark:bg-dark-elevated/70",
                        children: "Offline"
                    }), (0, t.jsx)("button", {
                        onClick: () => c(!0),
                        className: "flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/50 dark:hover:bg-dark-elevated/50",
                        "aria-label": "Dismiss offline banner",
                        children: (0, t.jsx)("svg", {
                            className: "h-4 w-4",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0, t.jsx)("path", {
                                d: "M18 6 6 18M6 6l12 12"
                            })
                        })
                    })]
                })]
            })
        })
    }
    e.i(247167);
    var c = e.i(557951),
        d = e.i(846932),
        p = e.i(88653);

    function m() {
        let {
            user: e
        } = (0, c.useAuth)(), a = (0, i.usePwaStore)(e => e.isOnline), {
            queueLength: s,
            isSyncing: n,
            processSyncQueue: o
        } = (0, l.useSyncStore)(), [u, m] = (0, r.useState)(!1), [h, b] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            if (a && s > 0 && !n) {
                let t = setTimeout(() => {
                    o(e ? .uid ? ? null)
                }, 1e3);
                return () => clearTimeout(t)
            }
        }, [a, s, n, o, e]), (0, r.useEffect)(() => {
            let e = e => {
                b(e.detail.count), m(!0), setTimeout(() => {
                    m(!1)
                }, 5e3)
            };
            return window.addEventListener("attempts-synced", e), () => {
                window.removeEventListener("attempts-synced", e)
            }
        }, []), (0, r.useEffect)(() => {
            if (!a) return;
            let t = setInterval(() => {
                s > 0 && !n && o(e ? .uid ? ? null)
            }, 3e5);
            return () => clearInterval(t)
        }, [a, s, n, o, e]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(p.AnimatePresence, {
                children: n && (0, t.jsx)(d.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 50
                    },
                    className: "fixed bottom-4 right-4 z-50 rounded-[20px] border-2 border-boutique-ink/10 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-dark-elevated",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, t.jsx)("svg", {
                            className: "h-5 w-5 animate-spin text-boutique-sage",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: (0, t.jsx)("path", {
                                d: "M21 12a9 9 0 1 1-6.219-8.56"
                            })
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("p", {
                                className: "text-sm font-black text-boutique-ink dark:text-boutique-cream",
                                children: "Syncing attempts..."
                            }), (0, t.jsxs)("p", {
                                className: "text-xs font-medium text-boutique-ink/60 dark:text-boutique-cream/60",
                                children: ["Uploading ", s, " ", 1 === s ? "attempt" : "attempts"]
                            })]
                        })]
                    })
                })
            }), (0, t.jsx)(p.AnimatePresence, {
                children: u && !n && (0, t.jsx)(d.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 50
                    },
                    className: "fixed bottom-4 right-4 z-50 rounded-[20px] border-2 border-boutique-sage/30 bg-boutique-sage/10 px-4 py-3 shadow-lg dark:border-boutique-sage/20 dark:bg-boutique-sage/5",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, t.jsx)("div", {
                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-boutique-sage",
                            children: (0, t.jsx)("svg", {
                                className: "h-5 w-5 text-boutique-ink",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, t.jsx)("path", {
                                    d: "M20 6 9 17l-5-5"
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, t.jsx)("p", {
                                className: "text-sm font-black text-boutique-ink dark:text-boutique-cream",
                                children: "Sync complete"
                            }), (0, t.jsxs)("p", {
                                className: "text-xs font-medium text-boutique-ink/60 dark:text-boutique-cream/60",
                                children: [h, " ", 1 === h ? "attempt" : "attempts", " uploaded successfully"]
                            })]
                        }), (0, t.jsx)("button", {
                            onClick: () => m(!1),
                            className: "rounded-full p-1 hover:bg-boutique-ink/5 dark:hover:bg-white/5",
                            children: (0, t.jsx)("svg", {
                                className: "h-4 w-4 text-boutique-ink/40 dark:text-boutique-cream/40",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, t.jsx)("path", {
                                    d: "M18 6 6 18M6 6l12 12"
                                })
                            })
                        })]
                    })
                })
            })]
        })
    }
    let h = "qm-sw-reload-requested",
        b = new Set(["localhost", "127.0.0.1"]);

    function g() {
        let e = window.navigator;
        return window.matchMedia("(display-mode: standalone)").matches || !0 === e.standalone
    }
    async function f() {
        if ("serviceWorker" in navigator) {
            let e = await navigator.serviceWorker.getRegistrations();
            await Promise.all(e.map(e => e.unregister()))
        }
        if ("caches" in window) {
            let e = await caches.keys();
            await Promise.all(e.filter(e => e.startsWith("qm-")).map(e => caches.delete(e)))
        }
    }

    function x() {
        let e = (0, i.usePwaStore)(e => e.setOnline),
            a = (0, i.usePwaStore)(e => e.setStandalone),
            s = (0, i.usePwaStore)(e => e.setInstallPromptEvent),
            o = (0, i.usePwaStore)(e => e.setUpdateReady),
            l = (0, i.usePwaStore)(e => e.setInstallOutcome);
        return (0, r.useEffect)(() => {
            let t = window.navigator.onLine;
            i.usePwaStore.getState().isOnline !== t && e(t);
            let r = g();
            a(r), r && (l("accepted"), (0, n.trackEvent)("pwa_standalone_detected", {
                source: "initial_mount"
            }));
            let u = !1,
                c = !1,
                d = () => e(!0),
                p = () => e(!1),
                m = () => {
                    let e = g();
                    a(e), e && (l("accepted"), (0, n.trackEvent)("pwa_standalone_detected", {
                        source: "display_mode_change"
                    }))
                },
                x = e => {
                    e.preventDefault(), s(e), (0, n.trackEvent)("pwa_beforeinstallprompt")
                },
                k = () => {
                    a(!0), s(null), l("accepted"), (0, n.trackEvent)("pwa_appinstalled")
                },
                w = () => {
                    c = !0
                };
            window.addEventListener("online", d), window.addEventListener("offline", p), window.addEventListener("beforeinstallprompt", x), window.addEventListener("appinstalled", k), window.addEventListener("qm-sw-explicit-reload-fallback", w);
            let v = window.matchMedia("(display-mode: standalone)");
            return v.addEventListener("change", m), b.has(window.location.hostname) ? f().catch(() => void 0) : "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(e => {
                (0, n.trackEvent)("pwa_sw_register_success"), e.waiting && o(!0), e.addEventListener("updatefound", () => {
                    let t = e.installing;
                    t && t.addEventListener("statechange", () => {
                        "installed" === t.state && navigator.serviceWorker.controller && o(!0)
                    })
                }), navigator.serviceWorker.addEventListener("controllerchange", () => {
                    if (u) return;
                    let e = (() => {
                        if (c) return c = !1, !0;
                        try {
                            if ("1" !== sessionStorage.getItem(h)) return !1;
                            return sessionStorage.removeItem(h), !0
                        } catch {
                            return !1
                        }
                    })();
                    (0, n.trackEvent)("pwa_controller_change", {
                        standalone: g(),
                        explicit_reload: e
                    }), e && (u = !0, window.location.reload())
                })
            }).catch(() => {
                (0, n.trackEvent)("pwa_sw_register_failure")
            }), () => {
                window.removeEventListener("online", d), window.removeEventListener("offline", p), window.removeEventListener("beforeinstallprompt", x), window.removeEventListener("appinstalled", k), window.removeEventListener("qm-sw-explicit-reload-fallback", w), v.removeEventListener("change", m)
            }
        }, [l, s, e, a, o]), (0, t.jsx)(m, {})
    }

    function k() {
        let e = (0, i.usePwaStore)(e => e.updateReady),
            r = (0, i.usePwaStore)(e => e.setUpdateReady);
        if (!e) return null;
        let a = async () => {
            let e = !0;
            try {
                sessionStorage.setItem(h, "1")
            } catch {
                e = !1
            }
            let t = await navigator.serviceWorker.getRegistration();
            t ? .waiting ? .postMessage({
                type: "SKIP_WAITING"
            }), e || window.dispatchEvent(new Event("qm-sw-explicit-reload-fallback"))
        };
        return (0, t.jsx)("div", {
            className: "border-b-2 border-boutique-sage/30 bg-boutique-sage/15 px-4 py-3 text-sm font-medium text-boutique-ink dark:border-boutique-sage/20 dark:bg-boutique-sage/10 dark:text-boutique-cream",
            children: (0, t.jsxs)("div", {
                className: "mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [(0, t.jsx)("p", {
                    children: "A newer QuickMark app shell is ready. Refresh to pick up the latest app experience."
                }), (0, t.jsxs)("div", {
                    className: "flex gap-3",
                    children: [(0, t.jsx)("button", {
                        onClick: () => r(!1),
                        className: "rounded-full border-2 border-boutique-ink/15 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] dark:border-white/10",
                        children: "Later"
                    }), (0, t.jsx)("button", {
                        onClick: () => void a(),
                        className: "sticker-button px-5 py-2 text-xs font-black uppercase tracking-[0.14em]",
                        children: "Refresh App"
                    })]
                })]
            })
        })
    }
    var w = e.i(776639),
        v = e.i(251688),
        S = e.i(705766),
        j = e.i(338280);

    function y({
        isOpen: e,
        onClose: a,
        defaultUsername: s,
        defaultImage: i
    }) {
        let {
            refreshBackendUser: n
        } = (0, c.useAuth)(), [o, l] = (0, r.useState)(1), [u, d] = (0, r.useState)(s), [p, m] = (0, r.useState)(null), [h, b] = (0, r.useState)(!0), [g, f] = (0, r.useState)(!0), [x, k] = (0, r.useState)(!1), [q, N] = (0, r.useState)(""), I = e => {
            let t = e.trim().replace(/\s+/g, " ");
            return t.length < 3 ? "Username must be at least 3 characters" : t.length > 30 ? "Username must be under 30 characters" : /^[a-zA-Z0-9 _-]+$/.test(t) ? "" : "Only letters, numbers, spaces, hyphens, and underscores"
        }, A = async () => {
            let e = I(u);
            if (e) return void N(e);
            try {
                k(!0);
                let e = u.trim().replace(/\s+/g, " "),
                    t = s.trim().replace(/\s+/g, " "),
                    r = (() => {
                        if (null === p) return i || void 0;
                        if ("google" === p && i) return i;
                        let e = j.AVATAR_PRESETS.find(e => e.id === p);
                        if (e) return (0, j.emojiToDataUri)(e.emoji, j.AVATAR_BG_COLORS[e.id] || "#e8f5e9")
                    })();
                if (e !== t) try {
                    await v.userApi.updateUsername(e)
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Failed to set username";
                    N(e), k(!1), l(1);
                    return
                }
                let o = {};
                r && (o.image = r), !0 !== h && (o.isPublic = h), !0 !== g && (o.showOnLeaderboard = g), Object.keys(o).length > 0 && await v.userApi.updateProfile(o), await n(), S.default.success(`Welcome, ${e}!`), a()
            } catch (e) {
                console.error("Failed to save welcome setup:", e), S.default.error("Something went wrong. You can change these later in Settings."), a()
            } finally {
                k(!1)
            }
        }, M = u.trim().length >= 3 && !q;
        return (0, t.jsx)(w.Dialog, {
            open: e,
            onOpenChange: () => {},
            children: (0, t.jsxs)(w.DialogContent, {
                className: "sm:max-w-lg",
                onPointerDownOutside: e => e.preventDefault(),
                onEscapeKeyDown: e => e.preventDefault(),
                children: [(0, t.jsxs)(w.DialogHeader, {
                    children: [(0, t.jsxs)(w.DialogTitle, {
                        className: "flex items-center gap-2 text-2xl font-black text-boutique-ink dark:text-boutique-cream",
                        children: [(0, t.jsx)("span", {
                            className: "text-2xl",
                            children: "👋"
                        }), 1 === o ? "Welcome! Set up your profile" : "Privacy settings"]
                    }), (0, t.jsx)(w.DialogDescription, {
                        className: "text-boutique-ink/60 dark:text-boutique-cream/60 font-medium",
                        children: 1 === o ? "Choose a username and avatar to get started" : "Control your visibility on the platform"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center justify-center gap-2 py-1",
                    children: [(0, t.jsx)("div", {
                        className: `h-1.5 w-12 rounded-full transition-colors ${o>=1?"bg-boutique-sage":"bg-boutique-ink/10 dark:bg-white/10"}`
                    }), (0, t.jsx)("div", {
                        className: `h-1.5 w-12 rounded-full transition-colors ${o>=2?"bg-boutique-sage":"bg-boutique-ink/10 dark:bg-white/10"}`
                    })]
                }), 1 === o ? (0, t.jsxs)("div", {
                    className: "space-y-5",
                    children: [(0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, t.jsx)("label", {
                            className: "text-sm font-black text-boutique-ink dark:text-boutique-cream",
                            children: "Username"
                        }), (0, t.jsx)("input", {
                            type: "text",
                            value: u,
                            onChange: e => {
                                var t;
                                d(t = e.target.value), t.trim().length > 0 ? N(I(t)) : N("")
                            },
                            maxLength: 30,
                            placeholder: "Choose a username...",
                            className: `w-full px-4 py-3 bg-white dark:bg-dark-elevated border-2 ${q?"border-boutique-coral focus:ring-boutique-coral/30":"border-boutique-ink/10 dark:border-white/10 focus:ring-boutique-sage/30 focus:border-boutique-sage"} rounded-2xl font-medium text-boutique-ink dark:text-boutique-cream placeholder:text-boutique-ink/30 dark:placeholder:text-boutique-cream/30 focus:outline-none focus:ring-4 transition-all`
                        }), q && (0, t.jsxs)("p", {
                            className: "text-sm font-medium text-boutique-coral flex items-center gap-1",
                            children: [(0, t.jsxs)("svg", {
                                className: "w-3.5 h-3.5 flex-shrink-0",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                children: [(0, t.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }), (0, t.jsx)("path", {
                                    d: "m15 9-6 6"
                                }), (0, t.jsx)("path", {
                                    d: "m9 9 6 6"
                                })]
                            }), q]
                        }), (0, t.jsx)("p", {
                            className: "text-xs font-medium text-boutique-ink/40 dark:text-boutique-cream/40",
                            children: "3-30 characters. Letters, numbers, spaces, hyphens, and underscores."
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, t.jsx)("label", {
                            className: "text-sm font-black text-boutique-ink dark:text-boutique-cream",
                            children: "Choose an avatar"
                        }), (0, t.jsxs)("div", {
                            className: "grid grid-cols-6 gap-2",
                            children: [i && (0, t.jsxs)("button", {
                                type: "button",
                                onClick: () => m("google"),
                                className: `relative aspect-square rounded-2xl border-2 transition-all flex items-center justify-center overflow-hidden ${"google"===p||null===p?"border-boutique-sage ring-2 ring-boutique-sage/30 scale-105":"border-boutique-ink/10 dark:border-white/10 hover:border-boutique-ink/30 dark:hover:border-white/30"}`,
                                title: "Your Google photo",
                                children: [(0, t.jsx)("img", {
                                    src: i,
                                    alt: "Google profile",
                                    className: "w-full h-full object-cover",
                                    referrerPolicy: "no-referrer"
                                }), ("google" === p || null === p) && (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-boutique-sage/20 flex items-end justify-center pb-0.5",
                                    children: (0, t.jsx)("svg", {
                                        className: "w-4 h-4 text-boutique-sage drop-shadow",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, t.jsx)("path", {
                                            d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                        })
                                    })
                                })]
                            }), j.AVATAR_PRESETS.map(e => (0, t.jsxs)("button", {
                                type: "button",
                                onClick: () => m(e.id),
                                className: `aspect-square rounded-2xl border-2 transition-all flex items-center justify-center text-2xl ${e.bg} ${p===e.id?"border-boutique-sage ring-2 ring-boutique-sage/30 scale-105":"border-boutique-ink/10 dark:border-white/10 hover:border-boutique-ink/30 dark:hover:border-white/30 hover:scale-105"}`,
                                title: e.label,
                                children: [e.emoji, p === e.id && (0, t.jsx)("div", {
                                    className: "absolute inset-0 rounded-2xl flex items-end justify-center pb-0.5",
                                    children: (0, t.jsx)("svg", {
                                        className: "w-4 h-4 text-boutique-sage drop-shadow",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, t.jsx)("path", {
                                            d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                        })
                                    })
                                })]
                            }, e.id))]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex gap-3 pt-1",
                        children: [(0, t.jsx)("button", {
                            onClick: () => {
                                (0, S.default)("You can change these anytime in Settings", {
                                    icon: "⚙️"
                                }), a()
                            },
                            className: "flex-1 px-4 py-3 bg-boutique-ink/5 hover:bg-boutique-ink/10 dark:bg-white/5 dark:hover:bg-white/10 text-boutique-ink dark:text-boutique-cream rounded-2xl font-black transition-colors border-2 border-boutique-ink/10 dark:border-transparent",
                            children: "Skip for now"
                        }), (0, t.jsxs)("button", {
                            onClick: () => l(2),
                            disabled: !M,
                            className: "flex-1 px-4 py-3 bg-boutique-sage hover:bg-boutique-sage/90 text-boutique-ink rounded-2xl font-black transition-all disabled:opacity-50 flex items-center justify-center gap-2 border-2 border-boutique-ink shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0",
                            children: ["Next", (0, t.jsx)("svg", {
                                className: "w-4 h-4",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, t.jsx)("path", {
                                    d: "m9 18 6-6-6-6"
                                })
                            })]
                        })]
                    })]
                }) : (0, t.jsxs)("div", {
                    className: "space-y-5",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-start gap-3 p-4 rounded-2xl bg-boutique-cream dark:bg-white/5 border-2 border-boutique-ink/10 dark:border-transparent",
                        children: [(0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [h ? (0, t.jsxs)("svg", {
                                    className: "w-4 h-4 text-boutique-sage",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, t.jsx)("path", {
                                        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                                    }), (0, t.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "3"
                                    })]
                                }) : (0, t.jsxs)("svg", {
                                    className: "w-4 h-4 text-boutique-ink/40 dark:text-boutique-cream/40",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, t.jsx)("path", {
                                        d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
                                    }), (0, t.jsx)("path", {
                                        d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                                    }), (0, t.jsx)("path", {
                                        d: "M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                                    }), (0, t.jsx)("line", {
                                        x1: "2",
                                        x2: "22",
                                        y1: "2",
                                        y2: "22"
                                    })]
                                }), (0, t.jsx)("h3", {
                                    className: "font-black text-boutique-ink dark:text-boutique-cream",
                                    children: "Public Profile"
                                })]
                            }), (0, t.jsx)("p", {
                                className: "text-sm font-medium text-boutique-ink/60 dark:text-boutique-cream/60",
                                children: "Others can view your profile when clicking your name"
                            })]
                        }), (0, t.jsxs)("label", {
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [(0, t.jsx)("input", {
                                type: "checkbox",
                                checked: h,
                                onChange: e => b(e.target.checked),
                                className: "sr-only peer"
                            }), (0, t.jsx)("div", {
                                className: "w-11 h-6 bg-boutique-ink/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-boutique-sage/30 rounded-full peer dark:bg-white/10 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-boutique-ink/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-transparent peer-checked:bg-boutique-sage"
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-start gap-3 p-4 rounded-2xl bg-boutique-cream dark:bg-white/5 border-2 border-boutique-ink/10 dark:border-transparent",
                        children: [(0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [(0, t.jsxs)("svg", {
                                    className: "w-4 h-4 text-boutique-coral",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, t.jsx)("path", {
                                        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                                    }), (0, t.jsx)("path", {
                                        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                                    }), (0, t.jsx)("path", {
                                        d: "M18 10V4H6v6c0 4 3 6 6 6s6-2 6-6Z"
                                    }), (0, t.jsx)("path", {
                                        d: "M12 16v4"
                                    }), (0, t.jsx)("path", {
                                        d: "M8 22h8"
                                    })]
                                }), (0, t.jsx)("h3", {
                                    className: "font-black text-boutique-ink dark:text-boutique-cream",
                                    children: "Show on Leaderboards"
                                })]
                            }), (0, t.jsx)("p", {
                                className: "text-sm font-medium text-boutique-ink/60 dark:text-boutique-cream/60",
                                children: "Display your scores on public leaderboards"
                            })]
                        }), (0, t.jsxs)("label", {
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [(0, t.jsx)("input", {
                                type: "checkbox",
                                checked: g,
                                onChange: e => f(e.target.checked),
                                className: "sr-only peer"
                            }), (0, t.jsx)("div", {
                                className: "w-11 h-6 bg-boutique-ink/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-boutique-sage/30 rounded-full peer dark:bg-white/10 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-boutique-ink/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-transparent peer-checked:bg-boutique-sage"
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "p-3 bg-boutique-sage/10 border-2 border-boutique-sage/30 rounded-2xl",
                        children: (0, t.jsxs)("p", {
                            className: "text-xs text-boutique-ink dark:text-boutique-cream font-medium",
                            children: [(0, t.jsx)("strong", {
                                className: "font-black",
                                children: "Tip:"
                            }), " You can always change these later from the Settings menu."]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex gap-3 pt-1",
                        children: [(0, t.jsxs)("button", {
                            onClick: () => l(1),
                            disabled: x,
                            className: "px-4 py-3 bg-boutique-ink/5 hover:bg-boutique-ink/10 dark:bg-white/5 dark:hover:bg-white/10 text-boutique-ink dark:text-boutique-cream rounded-2xl font-black transition-colors border-2 border-boutique-ink/10 dark:border-transparent flex items-center gap-1",
                            children: [(0, t.jsx)("svg", {
                                className: "w-4 h-4",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, t.jsx)("path", {
                                    d: "m15 18-6-6 6-6"
                                })
                            }), "Back"]
                        }), (0, t.jsx)("button", {
                            onClick: A,
                            disabled: x,
                            className: "flex-1 px-4 py-3 bg-boutique-sage hover:bg-boutique-sage/90 text-boutique-ink rounded-2xl font-black transition-all disabled:opacity-50 flex items-center justify-center gap-2 border-2 border-boutique-ink shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0",
                            children: x ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("svg", {
                                    className: "w-4 h-4 animate-spin",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, t.jsx)("path", {
                                        d: "M21 12a9 9 0 1 1-6.219-8.56"
                                    })
                                }), "Saving..."]
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: ["Let's go!", (0, t.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, t.jsx)("path", {
                                        d: "M5 12h14"
                                    }), (0, t.jsx)("path", {
                                        d: "m12 5 7 7-7 7"
                                    })]
                                })]
                            })
                        })]
                    })]
                })]
            })
        })
    }
    async function q({
        enabled: e,
        count: t
    }) {
        let r = navigator;
        if (r.setAppBadge && r.clearAppBadge) try {
            if (!e || t <= 0) return void await r.clearAppBadge();
            await r.setAppBadge(t)
        } catch {}
    }
    var N = e.i(887536),
        I = e.i(25897),
        A = e.i(292721),
        M = e.i(639884);
    e.s(["ProductShell", 0, function({
        children: e
    }) {
        let n = (0, a.useRouter)(),
            l = (0, a.usePathname)(),
            d = (0, i.usePwaStore)(e => e.isStandalone),
            p = (0, A.useUIStore)(e => e.zenModeEnabled),
            m = (0, A.useUIStore)(e => e.setZenModeEnabled),
            h = (0, I.useTimerStore)(e => e.timerStatus),
            b = (0, N.useSessionStore)(e => e.currentPaper),
            g = (0, N.useSessionStore)(e => e.getSavedPracticeSession),
            f = (0, M.useTopicalsStore)(e => e.session),
            {
                user: w,
                showWelcomeSetup: v,
                dismissWelcomeSetup: S
            } = (0, c.useAuth)(),
            j = ("/app/practice" === l || "/app" === l) && !localStorage.getItem("igcse-onboarding-completed");
        return (0, r.useEffect)(() => {
            p && document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen().catch(() => void 0) : !p && document.fullscreenElement && document.exitFullscreen().catch(() => void 0)
        }, [p]), (0, r.useEffect)(() => {
            let e = () => {
                !document.fullscreenElement && p && m(!1)
            };
            return document.addEventListener("fullscreenchange", e), () => document.removeEventListener("fullscreenchange", e)
        }, [m, p]), (0, r.useEffect)(() => {
            let e = e => {
                if ("running" === h) return N.useSessionStore.getState().savePracticeSession(), e.preventDefault(), e.returnValue = "", ""
            };
            return window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e)
        }, [h]), (0, r.useEffect)(() => {
            let e = () => {
                q({
                    enabled: d,
                    count: function({
                        hasActivePracticeSession: e,
                        hasActiveTopicalSession: t,
                        hasSavedPracticeSession: r
                    }) {
                        return [e, t, r, function() {
                            try {
                                let e = localStorage.getItem("igcse-mcq-topical-session");
                                if (!e) return !1;
                                let t = JSON.parse(e);
                                return !!(t ? .subjectCode && Array.isArray(t.questions) && t.questions.length > 0)
                            } catch {
                                return !1
                            }
                        }()].filter(Boolean).length
                    }({
                        hasActivePracticeSession: !!b,
                        hasActiveTopicalSession: !!f,
                        hasSavedPracticeSession: !!g()
                    })
                })
            };
            return e(), window.addEventListener("storage", e), window.addEventListener("focus", e), document.addEventListener("visibilitychange", e), () => {
                window.removeEventListener("storage", e), window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", e)
            }
        }, [b, g, d, f]), (0, t.jsxs)("div", {
            className: "relative flex h-screen flex-col overflow-hidden bg-boutique-cream text-boutique-ink transition-colors duration-300 dark:bg-dark-bg dark:text-boutique-cream",
            children: [(0, t.jsx)(x, {}), (0, t.jsx)("div", {
                className: "noise-overlay"
            }), w && v && !j && (0, t.jsx)(y, {
                isOpen: v,
                onClose: S,
                defaultUsername: w.displayName || w.email ? .split("@")[0] || "Student",
                defaultImage: w.photoURL || null
            }), (0, t.jsx)(s.Header, {
                hidden: p,
                onNavigate: e => n.push(e)
            }), (0, t.jsx)(k, {}), (0, t.jsx)(u, {}), (0, t.jsx)("div", {
                className: "relative flex-1 overflow-hidden",
                children: e
            }), (0, t.jsx)("div", {
                className: "pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+5.75rem)] z-50 px-4 sm:bottom-4 sm:px-6",
                children: (0, t.jsx)("div", {
                    className: "pointer-events-auto mx-auto max-w-5xl",
                    children: (0, t.jsx)(o, {})
                })
            })]
        })
    }], 733435)
}, 397699, e => {
    e.v(t => Promise.all(["static/chunks/0l7cp_8cx6-ei.js"].map(t => e.l(t))).then(() => t(391468)))
}, 925742, e => {
    e.v(t => Promise.all(["static/chunks/0~fswv8ez5up_.js"].map(t => e.l(t))).then(() => t(916160)))
}, 829614, e => {
    e.v(t => Promise.all(["static/chunks/0z0nf8nh8vxj1.js"].map(t => e.l(t))).then(() => t(797278)))
}, 618517, e => {
    e.v(t => Promise.all(["static/chunks/16hpbd~stjb3n.js", "static/chunks/0~~-.33sbof-o.js", "static/chunks/0pcbw0vinp2qx.js", "static/chunks/17iioxneyyynw.js"].map(t => e.l(t))).then(() => t(429255)))
}, 7805, e => {
    e.v(t => Promise.all(["static/chunks/11a~oh1ffw48n.js"].map(t => e.l(t))).then(() => t(837746)))
}, 609586, e => {
    e.v(t => Promise.all(["static/chunks/16glgjl9evmdn.js"].map(t => e.l(t))).then(() => t(849913)))
}, 842284, e => {
    e.v(t => Promise.all(["static/chunks/054xtobj-umt_.js"].map(t => e.l(t))).then(() => t(310183)))
}, 978802, e => {
    e.v(t => Promise.all(["static/chunks/0ve5ivvcrrwu8.js"].map(t => e.l(t))).then(() => t(631767)))
}, 817031, e => {
    e.v(t => Promise.all(["static/chunks/0e9c-u9b29bgb.js", "static/chunks/0t1kdoziv-h.l.js"].map(t => e.l(t))).then(() => t(723409)))
}, 784691, e => {
    e.v(t => Promise.all(["static/chunks/0gu10jgryohw3.js"].map(t => e.l(t))).then(() => t(189235)))
}]);