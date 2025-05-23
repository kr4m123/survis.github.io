﻿define({ entries : {
    "abeyagunasekera_lisa_2022": {
        "abstract": "This work proposed a unified approach to increase the explainability of the predictions made by Convolution Neural Networks (CNNs) on medical images using currently available Explainable Artificial Intelligent (XAI) techniques. This method in-cooperates multiple techniques such as LISA aka Local Interpretable Model Agnostic Explanations (LIME), integrated gradients, Anchors and Shapley Additive Explanations (SHAP) which is Shapley values-based approach to provide explanations for the predictions provided by Blackbox models. This unified method increases the confidence in the black-box model\u2019s decision to be employed in crucial applications under the supervision of human specialists. In this work, a Chest X-ray (CXR) classification model for identifying Covid-19 patients is trained using transfer learning to illustrate the applicability of XAI techniques and the unified method (LISA) to explain model predictions. To derive predictions, an image-net based Inception V2 model is utilized as the transfer learning model.",
        "author": "Abeyagunasekera, Sudil Hasitha Piyath and Perera, Yuvin and Chamara, Kenneth and Kaushalya, Udari and Sumathipala, Prasanna and Senaweera, Oshada",
        "booktitle": "2022 {IEEE} 7th {International} conference for {Convergence} in {Technology} ({I2CT})",
        "doi": "10.1109/I2CT54291.2022.9824840",
        "file": "Snapshot:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\335Z4FXA\\\\9824840.html:text/html",
        "keywords": "xai_type:attribution-based, application:covid-19, xai_used:lisa, xai_used:lime, xai_used:integrated_gradients, xai_used:anchors, xai_used:shap, type/focus:conceptual_(multiple_xai), ai_used:inception_v2, data_used:x-ray, data_used:photos",
        "month": "apr,",
        "pages": "1--9",
        "publisher": "IEEE",
        "series": "I2CT",
        "title": "{LISA} : {Enhance} the explainability of medical images unifying current {XAI} techniques",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/abstract/document/9824840",
        "urldate": "2025-05-11",
        "year": "2022"
    },
    "barua_explainable_2023": {
        "abstract": "The human skeletal framework relies heavily on bones, and one such crucial component is the \u201cHumerus.\u201d Positioned in the upper arm, extending from the shoulder to the elbow junction, the Humerus provides essential structural support for muscles and facilitates upper-body movement, particularly in the arms and hands. Consequently, Humerus fractures significantly impact daily life, causing disruptions and limitations. This paper presents a thorough exploration of an Explainable AI-based Humerus Fracture Detection and Classification system, employing various deep learning models. Leveraging a dataset of 1266 X-ray images, encompassing fractured and non-fractured humerus bones from the publicly available \u201cMURA\u201d dataset, our research evaluates the effectiveness of Convolutional Neural Networks (CNN), VGG16, VGG19, DenseNet121, and DenseNet169 in detecting fractures. After 30 epochs of training, we assessed their performance using critical metrics: accuracy, precision, recall, and F1 score. Notably, DenseNet121 and DenseNet169 exhibited superior accuracy, precision, and recall, laying a robust foundation for automated humerus fracture diagnosis. We also introduced two ensemble models, \"Ensemble-1 (VGG16 and VGG19)\" and \"Ensemble-2 (DenseNet121 and DenseNet169),\" which delivered substantial improvements in accuracy, precision, recall, and F1 score, showcasing the potential of ensemble techniques in clinical settings. Furthermore, we enhanced model interpretability and transparency by incorporating Saliency Maps and GRAD-CAM (Gradient-weighted Class Activation Mapping) for Explainable AI (XAI). This visualization allowed us to identify regions of interest in X-ray images contributing to the model\u2019s predictions, providing valuable insights for medical practitioners.",
        "author": "Barua, Koushick and Mahmud, Tanjim and Barua, Anik and Sharmen, Nahed and Basnin, Nanziba and Islam, Dilshad and Hossain, Mohammad Shahadat and Andersson, Karl and Hossain, Sazzad",
        "booktitle": "2023 26th {International} {Conference} on {Computer} and {Information} {Technology} ({ICCIT})",
        "doi": "10.1109/ICCIT60459.2023.10441124",
        "file": "Snapshot:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\HGGEGM7E\\\\10441124.html:text/html",
        "keywords": "xai_type:attribution-based, application:bone_fractures, xai_used:saliency_map, xai_used:grad-cam, type/focus:conceptual_(multiple_xai), ai_used:vgg-16, ai_used:vgg-19, ai_used:densenet121, ai_used:densenet169, data_used:x-ray, data_used:photos",
        "month": "dec,",
        "pages": "1--6",
        "publisher": "IEEE",
        "series": "ICCIT",
        "title": "Explainable {AI}-{Based} {Humerus} {Fracture} {Detection} and {Classification} from {X}-{Ray} {Images}",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/document/10441124",
        "urldate": "2025-05-11",
        "year": "2023"
    },
    "bashir_clinical_2025": {
        "abstract": "We aimed to develop and evaluate Explainable Artificial Intelligence (XAI) for fetal ultrasound using actionable concepts as feedback to end-users, using a prospective cross-center, multi-level approach. We developed, implemented, and tested a deep-learning model for fetal growth scans using both retrospective and prospective data. We used a modified Progressive Concept Bottleneck Model with pre-established clinical concepts as explanations (feedback on image optimization and presence of anatomical landmarks) as well as segmentations (outlining anatomical landmarks). The model was evaluated prospectively by assessing the following: the model's ability to assess standard plane quality, the correctness of explanations, the clinical usefulness of explanations, and the model's ability to discriminate between different levels of expertise among clinicians. We used 9352 annotated images for model development and 100 videos for prospective evaluation. Overall classification accuracy was 96.3\\%. The model's performance in assessing standard plane quality was on par with that of clinicians. Agreement between model segmentations and explanations provided by expert clinicians was found in 83.3\\% and 74.2\\% of cases, respectively. A panel of clinicians evaluated segmentations as useful in 72.4\\% of cases and explanations as useful in 75.0\\% of cases. Finally, the model reliably discriminated between the performances of clinicians with different levels of experience (p- values\u2009{\\textless}\u20090.01 for all measures) Our study has successfully developed an Explainable AI model for real-time feedback to clinicians performing fetal growth scans. This work contributes to the existing literature by addressing the gap in the clinical validation of Explainable AI models within fetal medicine, emphasizing the importance of multi-level, cross-institutional, and prospective evaluation with clinician end-users. The prospective clinical validation uncovered challenges and opportunities that could not have been anticipated if we had only focused on retrospective development and validation, such as leveraging AI to gauge operator competence in fetal ultrasound.",
        "author": "Bashir, Zahra and Lin, Manxi and Feragen, Aasa and Mikolaj, Kamil and Taks\u00f8e-Vester, Caroline and Christensen, Anders Nymark and Svendsen, Morten B. S. and Fabricius, Mette Hvilsh\u00f8j and Andreasen, Lisbeth and Nielsen, Mads and Tolsgaard, Martin Gr\u00f8nneb\u00e6k",
        "doi": "10.1038/s41598-025-86536-4",
        "file": "Full Text PDF:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\SYA96GWT\\\\Bashir et al. - 2025 - Clinical validation of explainable AI for fetal growth scans through multi-level, cross-institutiona.pdf:application/pdf",
        "issn": "2045-2322",
        "journal": "Scientific Reports",
        "keywords": "xai_type:concept-based, application:fetal_growth, xai_used:pcbm, type/focus:applied, ai_used:pcbm, data_used:ultrasound, data_used:photos, data_used:videos",
        "language": "eng",
        "month": "jan,",
        "number": "1",
        "pages": "2074",
        "pmcid": "PMC11739376",
        "pmid": "39820804",
        "series": "NatSR",
        "title": "Clinical validation of explainable {AI} for fetal growth scans through multi-level, cross-institutional prospective end-user evaluation",
        "type": "article",
        "volume": "15",
        "year": "2025"
    },
    "hicks_visual_2024": {
        "abstract": "Deep learning has achieved immense success in computer vision and has the potential to help physicians analyze visual content for disease and other abnormalities. However, the current state of deep learning is very much a black box, making medical professionals skeptical about integrating these methods into clinical practice. Several methods have been proposed to shed some light on these black boxes, but there is no consensus on the opinion of medical doctors that will consume these explanations. This paper presents a study asking medical professionals about their opinion of current state-of-the-art explainable artificial intelligence methods when applied to a gastrointestinal disease detection use case. We compare two different categories of explanation methods, intrinsic and extrinsic, and gauge their opinion of the current value of these explanations. The results indicate that intrinsic explanations are preferred and that physicians see value in the explanations. Based on the feedback collected in our study, future explanations of medical deep neural networks can be tailored to the needs and expectations of doctors. Hopefully, this will contribute to solving the issue of black box medical systems and lead to successful implementation of this powerful technology in the clinic.",
        "author": "Hicks, Steven and Stor\u00e5s, Andrea and Riegler, Michael A. and Midoglu, Cise and Hammou, Malek and Lange, Thomas de and Parasa, Sravanthi and Halvorsen, P\u00e5l and Str\u00fcmke, Inga",
        "doi": "10.1371/journal.pone.0304069",
        "file": "Full Text PDF:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\IFH2XNDY\\\\Hicks et al. - 2024 - Visual explanations for polyp detection How medical doctors assess intrinsic versus extrinsic expla.pdf:application/pdf",
        "issn": "1932-6203",
        "journal": "PLOS ONE",
        "keywords": "xai_type:attribution-based, application:polyps, xai_used:grad-cam, xai_used:captum, xai_used:shap, type/focus:applied, ai_used:resnet, data_used:photos",
        "language": "en",
        "month": "may,",
        "note": "Publisher: Public Library of Science",
        "number": "5",
        "pages": "e0304069",
        "series": "POne",
        "shorttitle": "Visual explanations for polyp detection",
        "title": "Visual explanations for polyp detection: {How} medical doctors assess intrinsic versus extrinsic explanations",
        "type": "article",
        "url": "https://journals.plos.org/plosone/article?id",
        "urldate": "2025-05-11",
        "volume": "19",
        "year": "2024"
    },
    "hossain_explainable_2025": {
        "abstract": "With the power of parallel processing, large datasets, and fast computational resources, deep neural networks (DNNs) have outperformed highly trained and experienced human experts in medical applications. However, the large global community of healthcare professionals, many of whom routinely face potentially life-or-death outcomes with complex medicolegal consequences, have yet to embrace this powerful technology. The major problem is that most current AI solutions function as a metaphorical black-box positioned between input data and output decisions without a rigorous explanation for their internal processes. With the goal of enhancing trust and improving acceptance of artificial intelligence\u2013 (AI) based technology in clinical medicine, there is a large and growing effort to address this challenge using eXplainable AI (XAI), a set of techniques, strategies, and algorithms with an explicit focus on explaining the \u201chows and whys\u201d of DNNs. Here, we provide a comprehensive review of the state-of-the-art XAI techniques concerning healthcare applications and discuss current challenges and future directions. We emphasize the strengths and limitations of each category, including image, tabular, and textual explanations, and explore a range of evaluation metrics for assessing the effectiveness of XAI solutions. Finally, we highlight promising opportunities for XAI research to enhance the acceptance of DNNs by the healthcare community.",
        "author": "Hossain, Md Imran and Zamzmi, Ghada and Mouton, Peter R. and Salekin, Md Sirajus and Sun, Yu and Goldgof, Dmitry",
        "doi": "10.1145/3637487",
        "file": "Full Text PDF:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\AA9YJIHS\\\\Hossain et al. - 2025 - Explainable AI for Medical Data Current Methods, Limitations, and Future Directions.pdf:application/pdf",
        "issn": "0360-0300",
        "journal": "ACM Comput. Surv.",
        "keywords": "xai_type:n/a, type/focus:literature_survey/review, application:n/a, ai_used:n/a, xai_used:n/a, data_used:n/a",
        "month": "feb,",
        "number": "6",
        "pages": "148:1--148:46",
        "series": "CSUR",
        "shorttitle": "Explainable {AI} for {Medical} {Data}",
        "title": "Explainable {AI} for {Medical} {Data}: {Current} {Methods {Limitations and {Future} {Directions}",
        "type": "article",
        "url": "https://dl.acm.org/doi/10.1145/3637487",
        "urldate": "2025-05-12",
        "volume": "57",
        "year": "2025"
    },
    "hossain_vision_2024": {
        "abstract": "The abnormal growth of malignant or nonmalignant tissues in the brain causes long-term damage to the brain. Magnetic resonance imaging (MRI) is one of the most common methods of detecting brain tumors. To determine whether a patient has a brain tumor, MRI filters are physically examined by experts after they are received. It is possible for MRI images examined by different specialists to produce inconsistent results since professionals formulate evaluations differently. Furthermore, merely identifying a tumor is not enough. To begin treatment as soon as possible, it is equally important to determine the type of tumor the patient has. In this paper, we consider the multiclass classification of brain tumors since significant work has been done on binary classification. In order to detect tumors faster, more unbiased, and reliably, we investigated the performance of several deep learning (DL) architectures including Visual Geometry Group 16 (VGG16), InceptionV3, VGG19, ResNet50, InceptionResNetV2, and Xception. Following this, we propose a transfer learning(TL) based multiclass classification model called IVX16 based on the three best-performing TL models. We use a dataset consisting of a total of 3264 images. Through extensive experiments, we achieve peak accuracy of 95.11\\%, 93.88\\%, 94.19\\%, 93.88\\%, 93.58\\%, 94.5\\%, and 96.94\\% for VGG16, InceptionV3, VGG19, ResNet50, InceptionResNetV2, Xception, and IVX16, respectively. Furthermore, we use Explainable AI to evaluate the performance and validity of each DL model and implement recently introduced Vison Transformer (ViT) models and compare their obtained output with the TL and ensemble model.",
        "author": "Hossain, Shahriar and Chakrabarty, Amitabha and Gadekallu, Thippa Reddy and Alazab, Mamoun and Piran, Md. Jalil",
        "doi": "10.1109/JBHI.2023.3266614",
        "file": "Snapshot:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\QMXZJMZU\\\\10100703.html:text/html",
        "issn": "2168-2208",
        "journal": "IEEE Journal of Biomedical and Health Informatics",
        "keywords": "xai_type:attribution-based, application:brain_tumors, ai_used:vgg-16, ai_used:inception_v3, ai_used:xception, xai_used:lime, data_used:mri, data_used:photos, type/focus:conceptual_(single_xai)",
        "month": "mar,",
        "number": "3",
        "pages": "1261--1272",
        "series": "JBHI",
        "title": "Vision {Transformers {Ensemble} {Model and {Transfer} {Learning} {Leveraging} {Explainable} {AI} for {Brain} {Tumor} {Detection} and {Classification}",
        "type": "article",
        "url": "https://ieeexplore.ieee.org/document/10100703",
        "urldate": "2025-05-11",
        "volume": "28",
        "year": "2024"
    },
    "hu_x-mir_2022": {
        "abstract": "Despite significant progress in the past few years, machine learning systems are still often viewed as \"black boxes,\" which lack the ability to explain their output decisions. In high-stakes situations such as healthcare, there is a need for explainable AI (XAI) tools that can help open up this black box. In contrast to approaches which largely tackle classification problems in the medical imaging domain, we address the less-studied problem of explainable image retrieval. We test our approach on a COVID-19 chest X-ray dataset and the ISIC 2017 skin lesion dataset, showing that saliency maps help reveal the image features used by models to determine image similarity. We evaluated three different saliency algorithms, which were either occlusion-based, attention-based, or relied on a form of activation mapping. We also develop quantitative evaluation metrics that allow us to go beyond simple qualitative comparisons of the different saliency algorithms. Our results have the potential to aid clinicians when viewing medical images and addresses an urgent need for interventional tools in response to COVID-19. The source code is publicly available at: https://gitlab.kitware.com/brianhhu/x-mir.",
        "author": "Hu, Brian and Vasu, Bhavan and Hoogs, Anthony",
        "booktitle": "2022 {IEEE}/{CVF} {Winter} {Conference} on {Applications} of {Computer} {Vision} ({WACV})",
        "doi": "10.1109/WACV51458.2022.00161",
        "file": "Snapshot:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\2Z36QLBQ\\\\9706900.html:text/html",
        "keywords": "xai_type:attribution-based, application:skin_cancer, application:covid-19, xai_used:saliency_map, xai_used:occlusion_based_saliency, xai_used:attention_based_saliency, type/focus:conceptual_(comparison_of_xai), ai_used:densenet121, data_used:x-ray, data_used:photos",
        "month": "jan,",
        "note": "ISSN: 2642-9381",
        "pages": "1544--1554",
        "publisher": "IEEE",
        "series": "WACV",
        "shorttitle": "X-{MIR}",
        "title": "X-{MIR}: {EXplainable} {Medical} {Image} {Retrieval}",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/abstract/document/9706900",
        "urldate": "2025-05-11",
        "year": "2022"
    },
    "kerz_toward_2023": {
        "abstract": "Advances in artificial intelligence (AI) in general and Natural Language Processing (NLP) in particular are paving the new way forward for the automated detection and prediction of mental health disorders among the population. Recent research in this area has prioritized predictive accuracy over model interpretability by relying on deep learning methods. However, prioritizing predictive accuracy over model interpretability can result in a lack of transparency in the decision-making process, which is critical in sensitive applications such as healthcare. There is thus a growing need for explainable AI (XAI) approaches to psychiatric diagnosis and prediction. The main aim of this work is to address a gap by conducting a systematic investigation of XAI approaches in the realm of automatic detection of mental disorders from language behavior leveraging textual data from social media. In pursuit of this aim, we perform extensive experiments to evaluate the balance between accuracy and interpretability across predictive mental health models. More specifically, we build BiLSTM models trained on a comprehensive set of human-interpretable features, encompassing syntactic complexity, lexical sophistication, readability, cohesion, stylistics, as well as topics and sentiment/emotions derived from lexicon-based dictionaries to capture multiple dimensions of language production. We conduct extensive feature ablation experiments to determine the most informative feature groups associated with specific mental health conditions. We juxtapose the performance of these models against a \u201cblack-box\u201d domain-specific pretrained transformer adapted for mental health applications. To enhance the interpretability of the transformers models, we utilize a multi-task fusion learning framework infusing information from two relevant domains (emotion and personality traits). Moreover, we employ two distinct explanation techniques: the local interpretable model-agnostic explanations (LIME) method and a model-specific self-explaining method (AGRAD). These methods allow us to discern the specific categories of words that the information-infused models rely on when generating predictions. Our proposed approaches are evaluated on two public English benchmark datasets, subsuming five mental health conditions (attention-deficit/hyperactivity disorder, anxiety, bipolar disorder, depression and psychological stress).",
        "author": "Kerz, Elma and Zanwar, Sourabh and Qiao, Yu and Wiechmann, Daniel",
        "doi": "10.3389/fpsyt.2023.1219479",
        "file": "Full Text PDF:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\UKY5YFMU\\\\Kerz et al. - 2023 - Toward explainable AI (XAI) for mental health detection based on language behavior.pdf:application/pdf",
        "issn": "1664-0640",
        "journal": "Frontiers in Psychiatry",
        "keywords": "xai_type:attribution-based, application:mental_health_diagnoses, xai_used:lime, xai_used:agrad, type/focus:conceptual_(multiple_xai), ai_used:bilstm, ai_used:mentalroberta, ai_used:multi_task-fusion_models, data_used:textual, data_used:social_media_posts",
        "language": "English",
        "month": "dec,",
        "note": "Publisher: Frontiers",
        "pages": "1219479",
        "series": "fpsyt",
        "title": "Toward explainable {AI} ({XAI}) for mental health detection based on language behavior",
        "type": "article",
        "url": "https://www.frontiersin.orghttps://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2023.1219479/full",
        "urldate": "2025-05-11",
        "volume": "14",
        "year": "2023"
    },
    "lucieri_exaid_2022": {
        "abstract": "Background and objectives: One principal impediment in the successful deployment of Artificial Intelligence (AI) based Computer-Aided Diagnosis (CAD) systems in everyday clinical workflows is their lack of transparent decision-making. Although commonly used eXplainable AI (XAI) methods provide insights into these largely opaque algorithms, such explanations are usually convoluted and not readily comprehensible. The explanation of decisions regarding the malignancy of skin lesions from dermoscopic images demands particular clarity, as the underlying medical problem definition is ambiguous in itself. This work presents ExAID (Explainable AI for Dermatology), a novel XAI framework for biomedical image analysis that provides multi-modal concept-based explanations, consisting of easy-to-understand textual explanations and visual maps, to justify the predictions. Methods: Our framework relies on Concept Activation Vectors to map human-understandable concepts to those learned by an arbitrary Deep Learning (DL) based algorithm, and Concept Localisation Maps to highlight those concepts in the input space. This identification of relevant concepts is then used to construct fine-grained textual explanations supplemented by concept-wise location information to provide comprehensive and coherent multi-modal explanations. All decision-related information is presented in a diagnostic interface for use in clinical routines. Moreover, the framework includes an educational mode providing dataset-level explanation statistics as well as tools for data and model exploration to aid medical research and education processes. Results: Through rigorous quantitative and qualitative evaluation of our framework on a range of publicly available dermoscopic image datasets, we show the utility of multi-modal explanations for CAD-assisted scenarios even in case of wrong disease predictions. We demonstrate that concept detectors for the explanation of pre-trained networks reach accuracies of up to 81.46\\%, which is comparable to supervised networks trained end-to-end. Conclusions: We present a new end-to-end framework for the multi-modal explanation of DL-based biomedical image analysis in Melanoma classification and evaluate its utility on an array of datasets. Since perspicuous explanation is one of the cornerstones of any CAD system, we believe that ExAID will accelerate the transition from AI research to practice by providing dermatologists and researchers with an effective tool that they can both understand and trust. ExAID can also serve as the basis for similar applications in other biomedical fields.",
        "author": "Lucieri, Adriano and Bajwa, Muhammad Naseer and Braun, Stephan Alexander and Malik, Muhammad Imran and Dengel, Andreas and Ahmed, Sheraz",
        "doi": "10.1016/j.cmpb.2022.106620",
        "file": "ScienceDirect Snapshot:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\HYRNVI7S\\\\S0169260722000050.html:text/html;Submitted Version:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\LWZTHNLN\\\\Lucieri et al. - 2022 - ExAID A multimodal explanation framework for computer-aided diagnosis of skin lesions.pdf:application/pdf",
        "issn": "0169-2607",
        "journal": "Computer Methods and Programs in Biomedicine",
        "keywords": "xai_type:concept-based, application:skin_cancer, xai_used:exaid, xai_used:textual, xai_used:clm, xai_used:tcav, type/focus:conceptual_(multiple_xai), ai_used:seresnext, data_used:textual, data_used:photos",
        "month": "mar,",
        "pages": "106620",
        "series": "CPMB",
        "shorttitle": "{ExAID}",
        "title": "{ExAID}: {A} multimodal explanation framework for computer-aided diagnosis of skin lesions",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0169260722000050",
        "urldate": "2025-05-11",
        "volume": "215",
        "year": "2022"
    },
    "murugan_efficient_2025": {
        "abstract": "The growing dependence on deep learning models for medical diagnosis underscores the critical need for robust interpretability and transparency to instill trust and ensure responsible usage. This study investigates the efficacy of various explainable artificial intelligence (XAI) techniques in comprehending deep learning models utilized for breast cancer classification from down sampled histopathology images. A comparative assessment of multiple convolutional neural network (CNN) architectures, encompassing standard CNNs, ResNet, VGG-16, and VGG-19, on down sampled images was conducted. The primary goal is to pinpoint the model exhibiting the highest accuracy and subsequently employ three prominent XAI methods\u2014LIME, SHAP, and Saliency Maps\u2014to get insights into the top-performing model. This study identifies VGG-19 as the best-performing model with an accuracy of 92.59\\% and demonstrates that among various XAI techniques, LIME provides the most accurate and clinically relevant explanations for breast cancer classification from down sampled histopathology images. These findings, validated by medical professionals, enhance the interpretability and reliability of deep learning models in clinical settings, promoting their responsible integration into healthcare practices. This validation was further corroborated through consultation with medical professionals, including doctors specializing in breast cancer diagnosis. This research endeavors to deepen the understanding of the model\u2019s rationale and instill confidence in its outputs. The outcomes of this study hold significant promise in elevating the interpretability and reliability of deep learning models tailored for breast cancer diagnosis, thus facilitating their responsible integration into clinical settings.",
        "author": "Murugan, Tamilarasi Kathirvel and Karthikeyan, Pritikaa and Sekar, Pavithra",
        "doi": "10.1007/s00521-024-10790-2",
        "file": "Full Text PDF:C\\:\\\\Users\\\\markf\\\\Zotero\\\\storage\\\\4YSCYQ9R\\\\Murugan et al. - 2025 - Efficient breast cancer detection using neural networks and explainable artificial intelligence.pdf:application/pdf",
        "issn": "1433-3058",
        "journal": "Springer-Verlag",
        "keywords": "xai_type:attribution-based, application:breast_cancer, xai_used:lime, xai_used:shap, xai_used:saliency_map, type/focus:conceptual_(comparison_of_xai), ai_used:resnet, ai_used:vgg-16, ai_used:vgg-19, data_used:histological, data_used:photos",
        "language": "en",
        "month": "feb,",
        "number": "5",
        "pages": "3759--3776",
        "series": "Neural Computing and Applications",
        "title": "Efficient breast cancer detection using neural networks and explainable artificial intelligence",
        "type": "article",
        "url": "https://doi.org/10.1007/s00521-024-10790-2",
        "urldate": "2025-05-11",
        "volume": "37",
        "year": "2025"
    }
}});