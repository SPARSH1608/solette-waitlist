import React, { useState } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:3001/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('You have been added to the waitlist!');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setEmail('');
                }, 3000);
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to connect to the server.');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-0">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                {/* Decorative corner glows */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#14F195]/10 rounded-full blur-3xl group-hover:bg-[#14F195]/20 transition-all duration-700"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#9945FF]/10 rounded-full blur-3xl group-hover:bg-[#9945FF]/20 transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#14F195]/10 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#14F195]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase mb-2">
                        Join The Waitlist
                    </h2>
                    <p className="text-sm font-medium tracking-widest uppercase opacity-40 mb-8 leading-relaxed">
                        Get early access to cinematic gaming on Solana.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#14F195]/50 transition-all font-medium"
                        />

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${status === 'success'
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-[#14F195] hover:bg-[#0fd985] text-black shadow-[0_0_20px_rgba(20,241,149,0.3)]'
                                }`}
                        >
                            {status === 'loading' ? (
                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            ) : status === 'success' ? (
                                'Added Successfully'
                            ) : (
                                'Submit'
                            )}
                        </button>

                        {status === 'error' && (
                            <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-2">{message}</p>
                        )}

                        {status === 'success' && (
                            <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mt-2">{message}</p>
                        )}
                    </form>

                    <button
                        onClick={onClose}
                        className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
