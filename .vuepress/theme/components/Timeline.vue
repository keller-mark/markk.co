<template>
    <div>
        <div class="timeline-filter">
            <table>
                <tr>
                    <td>
                        <input type="checkbox" value="Education" id="filter-education" v-model="selectedTypes" />
                        <label for="filter-education" :style="{'color': colors['Education']}">Education</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Research" id="filter-research" v-model="selectedTypes" />
                        <label for="filter-research" :style="{'color': colors['Research']}">Research</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Internship" id="filter-internship" v-model="selectedTypes" />
                        <label for="filter-internship" :style="{'color': colors['Internship']}">Internships</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Class" id="filter-class" v-model="selectedTypes" />
                        <label for="filter-class" :style="{'color': colors['Class']}">Class Projects</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" value="Personal" id="filter-personal" v-model="selectedTypes" />
                        <label for="filter-personal" :style="{'color': colors['Personal']}">Personal Projects</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Freelance" id="filter-freelance" v-model="selectedTypes" />
                        <label for="filter-freelance" :style="{'color': colors['Freelance']}">Freelance Projects</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Service" id="filter-service" v-model="selectedTypes" />
                        <label for="filter-service" :style="{'color': colors['Service']}">Service Projects</label>
                    </td>
                    <td>
                        <input type="checkbox" value="Hackathon" id="filter-hackathon" v-model="selectedTypes" />
                        <label for="filter-hackathon" :style="{'color': colors['Hackathon']}">Hackathon Projects</label>
                    </td>
                </tr>
            </table>
        </div>
        <div class="timeline">
            <div class="timeline-item" v-for="(item, index) of items" :key="item.path">
                <div class="timeline-date">
                    {{ item.frontmatter.date | date }}
                </div>
                <div class="timeline-dot">
                    <div class="timeline-dot-inner" :style="{'background-color': colors[item.frontmatter.type]}"></div>
                    <div class="timeline-line">
                        <svg height="100" width="52">
                            <path d="M 50,0 L 50,200" :stroke="colors[item.frontmatter.type]" stroke-width="2" fill="none" stroke-linecap="round" :stroke-dasharray="(index === items.length-1 ? '5,5' : '')" />
                        </svg>
                    </div>
                </div>
                <div class="timeline-item-inner">
                    <h3>{{ item.frontmatter.title }}</h3>
                    <h4>{{ item.frontmatter.subtitle }}</h4>
                    <div class="timeline-read-more" v-if="item.frontmatter.readmore === undefined"><a :href="item.path">Read More &rarr;</a></div>
                </div>
                <div class="timeline-item-icon" :style="{'background-image': 'url(' + item.frontmatter.icon + ')'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
import mixin from './mixin.js';

const pageBlacklist = [
    "/"
];

export default {
    props: ['site'],
    mixins: [mixin],
    data() {
        return {
            selectedTypes: [
                "Education"
            ],
            colors: {
                "Education": "#001f3f",
                "Internship": "#0074D9",
                "Research": "#B10DC9",
                "Class": "#3D9970",
                "Personal": "#e88d67",
                "Service": "#db162f",
                "Hackathon": "#63768d",
                "Freelance": "#b7990d"
            }
        };
    },
    created() {
        const cachedSelectedTypes = JSON.parse(window.localStorage.getItem('timelineSelectedTypes'));
        if(Array.isArray(cachedSelectedTypes)) {
            this.selectedTypes = cachedSelectedTypes;
        }
    },
    watch: {
        selectedTypes(val) {
            window.localStorage.setItem('timelineSelectedTypes', JSON.stringify(val));
        }
    },
    computed: {
        items() {
            return this.$site.pages
                .filter(page => !pageBlacklist.includes(page.path) && page.frontmatter.hasOwnProperty("date"))
                .filter((el) => this.selectedTypes.includes(el.frontmatter.type))
                .sort((a, b) => (new Date(b.frontmatter.date) - new Date(a.frontmatter.date)));
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline-filter {
    margin-top: 2rem;
    margin-bottom: 2rem;
    table {
        margin: 0 auto;
    }
}
.timeline {
    display: table;
    width: 80%;
    margin-left: 10%;
    .timeline-item {
        display: table-row; 
        .timeline-date {
            display: table-cell;
            width: 33%;
            text-align: right;
            padding-right: 1rem;
        }
        .timeline-dot {
            display: table-cell;
            width: 0;
            position: relative;
            z-index: 1;
            .timeline-dot-inner {
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                box-sizing: border-box;
                vertical-align: middle;
            }
            .timeline-line {
                width: 0px;
                position: relative;
                left: -50px;
                height: 100px;
                vertical-align: bottom;
                svg {
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    box-sizing: border-box;
                    z-index: 1;
                }
            }
        }
        .timeline-item-inner {
            display: table-cell;
            font-size: 14px;
            padding-left: 1rem;
            z-index: 3;
            h3 {
                margin-bottom: 0;
            }
            h4 {
                margin-top: 0rem;
            }
            .timeline-read-more a {
                text-decoration: none;
                color: gray;
            }
        }
        .timeline-item-icon {
            display: table-cell;
            width: 100px;
            vertical-align: top;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top center;
        }
    }
}

@media screen and (max-width: 530px) {
    .timeline {
        .timeline-item {
            .timeline-item-icon {
                display: none;
            }
        }
    }
    .timeline-filter {
        label {
            font-size: 12px;
        }
    }
}
</style>
