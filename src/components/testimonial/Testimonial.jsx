import React from 'react';

const Testimonial = () => {
    return (
        <div>
             {/* testimonial */}
             <div className="mt-10">
                <h2 className="text-5xl font-bold mb-6 text-[#FF0101]">Testimonial</h2>

                <div className="flex  items-center gap-20 ">
                    <div className="flex gap-3 items-center">
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt="Client profile"
                            className="rounded-full w-20 h-20 mb-4"
                        />
                        <h3 className="text-lg font-semibold">
                            {testimonials[currentTestimonial].name}
                        </h3>
                    </div>
                    <p className="my-4 max-w-xl">
                        {testimonials[currentTestimonial].message}
                    </p>
                </div>
                <div className="flex gap-5">
                    <button
                        onClick={prevTestimonial}
                        className="text-[#FF0101] font-bold text-2xl px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="text-[#FF0101] font-bold text-2xl px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;