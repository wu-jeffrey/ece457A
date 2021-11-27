%% Finding bounds for fitness function
clc; clear all;

x = 3:18;
y = 1.06:0.04:9.05;
z = 0.265:0.01:2.26;

ISE_MIN = 1000;
TR_MIN = 1000;
TS_MIN = 1000;
MP_MIN = 1000;

for i = 1:16

    for j = 1:200

        for k = 1:200
            disp(i)
            disp(j)
            disp(k)
            [ISE, t_r, t_s, M_p] = perfFCN([x(i); y(j); z(k)]);

            if ISE < ISE_MIN
                ISE_MIN = ISE;
            end

            if t_r < TR_MIN
                TR_MIN = t_r;
            end

            if t_s < TS_MIN
                TS_MIN = t_s;
            end

            if M_p < MP_MIN
                MP_MIN = M_p;
            end

        end

    end

end

%% PART C & D: GA
clc; clear all;

% GA PARAMETERS
population_size = 50;
num_generations = 150;
crossover_probability = 0.6;
mutation_probability = 0.25;
mutation_max_magnitudes = [abs(2 - 18); abs(1.05 - 9.42); abs(0.26 - 2.37)] * 0.8; % mutate genes up to 80 % of their domain

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;

initial_population = [initial_Kps initial_TIs initial_TDs];

[X, Y] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

plot(X, Y);
title('Fitness vs Generation');
xlabel('Generation');
ylabel('Fitness');

%% PART E: Varying Number of Generations
clc; clear all;

% GA PARAMETERS
population_size = 50;
num_generations = 150;
crossover_probability = 0.6;
mutation_probability = 0.25;
mutation_max_magnitudes = [abs(2 - 18); abs(1.05 - 9.42); abs(0.26 - 2.37)] * 0.8; % mutate genes up to 80 % of their domain

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;

initial_population = [initial_Kps initial_TIs initial_TDs];

[X1, Y1] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

num_generations = 50;
[X2, Y2] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

num_generations = 300;
[X3, Y3] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

plot(X1, Y1);
hold on;
plot(X2, Y2);
hold on;
plot(X3, Y3);

legend('150 gen', '50 gen', '300 gen');
title('Fitness vs Generation');
xlabel('Generation');
ylabel('Fitness');

%% PART F: Varying Population Size
clc; clear all;

% GA PARAMETERS
population_size = 50;
num_generations = 150;
crossover_probability = 0.6;
mutation_probability = 0.25;
mutation_max_magnitudes = [abs(2 - 18); abs(1.05 - 9.42); abs(0.26 - 2.37)] * 0.8; % mutate genes up to 80 % of their domain

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;
initial_population = [initial_Kps initial_TIs initial_TDs];

[X1, Y1] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

population_size = 10;

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;
initial_population = [initial_Kps initial_TIs initial_TDs];

[X2, Y2] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

population_size = 200;

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;
initial_population = [initial_Kps initial_TIs initial_TDs];

[X3, Y3] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

plot(X1, Y1);
hold on;
plot(X2, Y2);
hold on;
plot(X3, Y3);

legend('50 pop', '10 gen', '200 pop');
title('Fitness vs Generation');
xlabel('Generation');
ylabel('Fitness');

%% PART G: Varying Crossover probability
clc; clear all;

% GA PARAMETERS
population_size = 50;
num_generations = 150;
crossover_probability = 0.6;
mutation_probability = 0.25;
mutation_max_magnitudes = [abs(2 - 18); abs(1.05 - 9.42); abs(0.26 - 2.37)] * 0.8; % mutate genes up to 80 % of their domain

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;

initial_population = [initial_Kps initial_TIs initial_TDs];

[X1, Y1] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

crossover_probability = 0.3;
[X2, Y2] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

crossover_probability = 0.9;
[X3, Y3] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

plot(X1, Y1);
hold on;
plot(X2, Y2);
hold on;
plot(X3, Y3);

legend('P_co = 0.6', 'P_co = 0.3', 'P_co = 0.9');
title('Fitness vs Generation');
xlabel('Generation');
ylabel('Fitness');

%% PART H: Varying Mutation probability
clc; clear all;

% GA PARAMETERS
population_size = 50;
num_generations = 150;
crossover_probability = 0.6;
mutation_probability = 0.25;
mutation_max_magnitudes = [abs(2 - 18); abs(1.05 - 9.42); abs(0.26 - 2.37)] * 0.8; % mutate genes up to 80 % of their domain

% INITIAL POPULATION GENERATION
initial_Kps = randi([2 18], population_size, 1);
initial_TIs = randi([105 942], population_size, 1) ./ 100;
initial_TDs = randi([26 237], population_size, 1) ./ 100;

initial_population = [initial_Kps initial_TIs initial_TDs];

[X1, Y1] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

mutation_probability = 0.05;
[X2, Y2] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

mutation_probability = 0.6;
[X3, Y3] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population);

plot(X1, Y1);
hold on;
plot(X2, Y2);
hold on;
plot(X3, Y3);

legend('P_mu = 0.25', 'P_mu = 0.05', 'P_mu = 0.6');
title('Fitness vs Generation');
xlabel('Generation');
ylabel('Fitness');

function [X, Y] = genetic_algorithm(population_size, num_generations, crossover_probability, mutation_probability, mutation_max_magnitudes, initial_population)
    population = initial_population;

    % plotting variables
    X = 1:num_generations;
    Y = zeros(1, num_generations);

    % while termination criterion is not met
    for generation = 1:num_generations
        disp(generation);
        % elitism
        [elites, non_elite_parents] = elitism(population, 2);
        % parent selection
        parent_fitnesses = calculate_fitnesses(non_elite_parents);
        selected_parents = FPS(non_elite_parents, parent_fitnesses);
        % crossover
        children = crossover(selected_parents, crossover_probability);
        % mutation
        mutated = mutate(children, mutation_probability, mutation_max_magnitudes);
        % replacement
        population = [elites; mutated];

        % record history for fitness vs. generation plot
        [ISE, t_r, t_s, M_p] = perfFCN(elites(1, :).');
        Y(generation) = fitnessFCN(ISE, t_r, t_s, M_p);
        disp(fitnessFCN(ISE, t_r, t_s, M_p));
    end

end

function F = calculate_fitnesses(population)
    % get fitness of each parent
    F = zeros(length(population), 1); % init empty vector

    for i = 1:length(population)
        [ISE, t_r, t_s, M_p] = perfFCN(population(i, :).');
        F(i) = fitnessFCN(ISE, t_r, t_s, M_p);
    end

    % Replace all NaN values with 0; these correspond to unstable systems
    F(isnan(F)) = 0;
end

function f = fitnessFCN(ISE_, t_r_, t_s_, M_p_)
    % EMPIRICAL MIN PERFORMANCE PARAMETERS
    ISE_MIN = 74.077267208037500;
    TR_MIN = 0.435735829391950;
    TS_MIN = 4.260929504825433;
    MP_MIN = 9.436968709263516;

    f = 1 / (ISE_ / ISE_MIN + t_r_ / TR_MIN + t_s_ / TS_MIN + M_p_ / MP_MIN);
end

function selected_population = FPS(population, fitnesses)
    % Fitness Proportionate Selection (Roulette Wheel)
    sum_fitness = sum(fitnesses);
    probabilities = fitnesses / sum_fitness;

    % Create flattened wheel from probabilities
    flattened_roulette_wheel = zeros(length(population), 1); % init empty vector

    for n = 1:length(population)
        flattened_roulette_wheel(n) = sum(probabilities(1:n));
    end

    % Play Roulette! (This could be a BST instead of linear search)
    selected_population = zeros(length(population), 3); % init empty matrix

    for n = 1:length(population)
        % generate a random number
        num = rand;

        % see which "bucket/range" this random number falls under
        for i = 1:length(flattened_roulette_wheel)

            if num < flattened_roulette_wheel(i)
                selected_population(n, :) = population(i, :);
                break;
            end

        end

    end

end

function [elites, population_without_elites] = elitism(population, num_elites)
    [n, m] = size(population);

    fitness = calculate_fitnesses(population);
    population_joins_fitness = [population fitness];

    sorted_by_fitness = sortrows(population_joins_fitness, m + 1, 'descend');
    elites = sorted_by_fitness(1:num_elites, 1:m);
    population_without_elites = sorted_by_fitness((num_elites + 1):n, 1:m);
end

function children = crossover(parents, probability)
    [n, m] = size(parents);
    children = zeros(n, m);

    if mod(n, 2) == 0
        even_parents = parents;
    else
        even_parents = parents(1:n - 1, :);
        last_parent = parents(n, :);
        random_parent = parents(randi(1, n - 1), :);
        child = wholeArithmeticCrossOver(last_parent, random_parent, probability);
        children(n, :) = child;
    end

    for i = 1:2:length(even_parents)
        child1 = wholeArithmeticCrossOver(even_parents(i, :), even_parents(i + 1, :), probability);
        child2 = wholeArithmeticCrossOver(even_parents(i + 1, :), even_parents(i, :), probability);

        children(i, :) = child1;
        children(i + 1, :) = child2;
    end

end

function child = wholeArithmeticCrossOver(A, B, probability)
    [~, width] = size(A);

    child = zeros(1, width); % Init empty array

    for i = 1:width
        child(1:i) = probability * A(1:i) + (1 - probability) * B(1:i);
    end

end

function mutated = mutate(population, probability, mutation_max_magnitudes)
    % Use boundary mutation (analogous to bit flipping)
    [n, m] = size(population);
    mutated = zeros(n, m);

    for i = 1:n
        mutated(i, :) = population(i, :);

        if rand < probability
            % select a random gene
            gene_index = randi([1, m], 1, 1);
            mag = mutation_max_magnitudes(gene_index);
            noise = -mag + (2 * mag) * rand; % generate a uniform random number
            mutated(i, gene_index) = mutated(i, gene_index) + noise;
        end

    end

end
