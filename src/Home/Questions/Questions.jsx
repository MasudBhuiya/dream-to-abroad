import React from 'react';

const Questions = () => {
    return (
        <div className='bg-[#FAF9FF] '>
            <section className='py-14 max-w-[1170px]  items-center gap-10 mx-auto px-5 '>
                <h1 className='title service-header'>Frequently Asked Questions</h1>
                <div className="collapse  collapse-plus mb-4 bg-base-1000 shadow-sm bg-white mt-12">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-lg font-semibold text-[#525050] ">
                    Why should I consider studying abroad?
                    </div>
                    <div className="collapse-content">
                        <p>Studying abroad offers numerous benefits such as the chance to experience a different culture, develop language skills, broaden your worldview, gain independence, enhance employability, and make lifelong connections with people from diverse backgrounds.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-semibold text-[#525050] ">
                    Can I study abroad even if I don't speak the local language?
                    </div>
                    <div className="collapse-content">
                        <p>Studying abroad offers numerous benefits such as the chance to experience a different culture, develop language skills, broaden your worldview, gain independence, enhance employability, and make lifelong connections with people from diverse backgrounds.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-semibold text-[#525050] ">
                    How can a study abroad consultancy assist me in my study abroad journey?
                    </div>
                    <div className="collapse-content">
                        <p>Studying abroad offers numerous benefits such as the chance to experience a different culture, develop language skills, broaden your worldview, gain independence, enhance employability, and make lifelong connections with people from diverse backgrounds.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-semibold text-[#525050] ">
                    How long do study abroad programs typically last?
                    </div>
                    <div className="collapse-content">
                        <p>Studying abroad offers numerous benefits such as the chance to experience a different culture, develop language skills, broaden your worldview, gain independence, enhance employability, and make lifelong connections with people from diverse backgrounds.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;